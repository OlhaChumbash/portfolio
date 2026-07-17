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
      maxCycles: 2, // Скільки разів кожна крапля має пройти екран
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
      
      // Збільшуємо початковий розкид (від 0 до -40), щоб краплі падали хаотично, а не суцільною лінією
      const rainDrops = Array(totalColumns).fill(1).map(() => ({
        y: Math.floor(Math.random() * -40),
        cycles: 0,
        isFinished: false
      }));

      const frameInterval = 1000 / this.fps;
      const draw = (currentTime) => {
        const hasActiveDrops = rainDrops.some(drop => !drop.isFinished);
        
        if (!hasActiveDrops) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
          }
          return;
        }

        this.animationId = requestAnimationFrame(draw);
        const delta = currentTime - this.lastFrameTime;
        if (delta < frameInterval) return;
        this.lastFrameTime = currentTime - (delta % frameInterval);
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = `600 ${fontSize}px monospace`;

        for (let i = 0; i < rainDrops.length; i++) {
          const drop = rainDrops[i];

          if (drop.isFinished) continue;

          if (drop.y < 0) {
            drop.y++;
            continue;
          }

          for (let j = 0; j < 10; j++) {
            const dropY = drop.y - j;
            if (dropY < 0) break;
            const text = alphabet.charAt((Math.floor(Math.random() * alphabet.length)));
            const x = i * fontSize;
            const y = dropY * fontSize;
            const opacity = (1 - j / 10) * 0.35; 

            if (j === 0) {
              ctx.fillStyle = `rgba(255, 255, 255, 0.9)`; 
            } else {
              ctx.fillStyle = `rgba(66, 184, 131, ${opacity})`; 
            }
            ctx.fillText(text, x, y);
          }
          if (drop.y * fontSize > canvas.height) {
            drop.cycles++;            
            if (drop.cycles >= this.maxCycles) {
              drop.isFinished = true;
            } else {
              drop.y = Math.floor(Math.random() * -25);
            }
          }          
          drop.y++;
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
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  display: block;
}

@media (max-width: 991px) {
  .matrix-rain {
    display: none !important;
  }
}
</style>