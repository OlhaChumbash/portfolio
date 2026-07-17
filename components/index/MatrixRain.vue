<template>
  <canvas ref="matrixCanvas" class="matrix-rain"></canvas>
</template>

<script>
export default {
  name: "MatrixRain",
  data() {
    return {
      animationId: null,
      lastFrameTime: 0,
      fps: 16,
    };
  },
  mounted() {
    if (window.innerWidth >= 992) {
      this.initMatrix();
      window.addEventListener("resize", this.handleResize);
    }
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  },
  methods: {
    initMatrix() {
      const canvas = this.$refs.matrixCanvas;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      
      canvas.width = canvas.parentElement ? canvas.parentElement.offsetWidth : window.innerWidth;
      canvas.height = canvas.parentElement ? canvas.parentElement.offsetHeight : window.innerHeight;

      const alphabet = "ア14WカоXサP1タ4ナ5Xラ8イ0エ5オ1X234567890ABワCDEFG55HIJ8KLM0NOP0QRS0T1UVWXYZ";
      const fontSize = 24; 
      
      const totalColumns = Math.floor(canvas.width / fontSize);
      // Малюємо дощ на всій ширині, але оскільки він буде строго НАЙЗАДНІШИМ планом, він не заважатиме контенту
      const rainDrops = Array(totalColumns).fill(1).map(() => Math.floor(Math.random() * -20));
      const frameInterval = 1000 / this.fps;

      const draw = (currentTime) => {
        this.animationId = requestAnimationFrame(draw);
        const delta = currentTime - this.lastFrameTime;
        if (delta < frameInterval) return;
        this.lastFrameTime = currentTime - (delta % frameInterval);
        
        // КЛЮЧОВА ЗМІНА: Очищаємо canvas до повної прозорості, а не замальовуємо плашкою.
        // Це гарантує, що оригінальні кольори вашого сайту залишаться 100% чистими.
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.font = `600 ${fontSize}px monospace`;

        for (let i = 0; i < rainDrops.length; i++) {
          if (rainDrops[i] < 0) {
            rainDrops[i]++;
            continue;
          }

          // Малюємо хвіст символів, які плавно згасають вгору
          for (let j = 0; j < 10; j++) {
            const dropY = rainDrops[i] - j;
            if (dropY < 0) break;

            const text = alphabet.charAt((Math.floor(Math.random() * alphabet.length)));
            const x = i * fontSize;
            const y = dropY * fontSize;

            // Чим далі символ від голови (j > 0), тим він прозоріший
            const opacity = (1 - j / 10) * 0.35; 

            if (j === 0) {
              ctx.fillStyle = `rgba(255, 255, 255, 0.9)`; // Яскрава голова краплі
            } else {
              ctx.fillStyle = `rgba(66, 184, 131, ${opacity})`; // Хвіст фірмового кольору #42b883
            }

            ctx.fillText(text, x, y);
          }

          if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = Math.floor(Math.random() * -15);
          }
          
          rainDrops[i]++;
        }
      };

      this.lastFrameTime = performance.now();
      draw(this.lastFrameTime);
    },
    handleResize() {
      if (window.innerWidth < 992) {
        if (this.animationId) {
          cancelAnimationFrame(this.animationId);
          this.animationId = null;
        }
        window.removeEventListener("resize", this.handleResize);
        return;
      }

      const canvas = this.$refs.matrixCanvas;
      if (canvas) {
        canvas.width = canvas.parentElement ? canvas.parentElement.offsetWidth : window.innerWidth;
        canvas.height = canvas.parentElement ? canvas.parentElement.offsetHeight : window.innerHeight;
        
        if (this.animationId) cancelAnimationFrame(this.animationId);
        this.initMatrix();
      }
    }
  }
};
</script>

<style scoped>
.matrix-rain {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* Повертаємо на повну ширину */
  height: 100%;
  z-index: -1; /* Ховаємо глибоко під контент */
  pointer-events: none;
  display: block;
}

@media (max-width: 991px) {
  .matrix-rain {
    display: none !important;
  }
}
</style>