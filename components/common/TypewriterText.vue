<!-- components/TypewriterText.vue -->
<template>
    <span class="typewriter-wrapper">
        {{ displayedText }}<span v-if="isTyping || keepCursor" class="cursor">|</span>
    </span>
</template>

<script>
export default {
    name: 'TypewriterText',
    props: {
        text: { type: String, required: true },
        speed: { type: Number, default: 100 },
        delay: { type: Number, default: 0 }, // Задержка перед началом печати (в мс)
        keepCursor: { type: Boolean, default: true }
    },
    data() {
        return {
            displayedText: '',
            isTyping: true,
        };
    },
    watch: {
        text: {
            immediate: true,
            handler(newVal) {
                // Добавляем setTimeout для поддержки задержки старта
                setTimeout(() => {
                    this.startTyping(newVal);
                }, this.delay);
            }
        }
    },
    methods: {
        startTyping(fullText) {
            this.displayedText = '';
            this.isTyping = true;
            let currentIndex = 0;

            const type = () => {
                if (fullText !== this.text) return;

                if (currentIndex < fullText.length) {
                    this.displayedText += fullText[currentIndex];
                    currentIndex++;
                    setTimeout(type, this.speed);
                } else {
                    this.isTyping = false;
                }
            };

            type();
        },
    },
};
</script>

<style scoped>
.typewriter-wrapper {
    display: inline-block;
}

.cursor {
    display: inline-block;
    margin-left: 3px;
    color: #42b883;
    animation: blink 0.8s infinite;
    font-weight: 300;
}

@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}
</style>