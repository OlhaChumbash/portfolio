<template>
    <div class="project-card__image-container" :class="{ 'is-flipped': isCodeView }">
        <div class="flip-card-inner">

            <div class="flip-card-front">
                <img :src="getImagePath(image)" :alt="title" class="project-card__image" />
                <button type="button" class="code-trigger-btn" @click="toggleView">
                    <span>&lt;/&gt; Code Snippet</span>
                </button>
            </div>

            <div class="flip-card-back">
                <div class="terminal">
                    <div class="terminal-header">
                        <div class="terminal-dots" @click="toggleView">
                            <span class="dot red"></span>
                            <span class="dot yellow"></span>
                            <span class="dot green"></span>
                        </div>
                        <span class="terminal-title">{{ title || parsedCodeData.fileName }}</span>
                        <button type="button" class="terminal-close" @click="toggleView">Visual Representation</button>
                    </div>

                    <div class="terminal-body">
                        <pre v-if="highlightedCode.length"
                            :class="'language-' + parsedCodeData.language"><code :class="'language-' + parsedCodeData.language"><div v-for="(line, idx) in highlightedCode" :key="idx" class="code-line"><span class="line-number">{{ idx + 1 }}</span><span v-html="line"></span></div></code></pre>
                        <pre v-else>
                            <code :class="'language-' + parsedCodeData.language">
  <span
    v-for="(line, idx) in highlightedCode"
    :key="idx"
    class="code-line"
  >
    <span class="line-number">{{ idx + 1 }}</span>
    <span v-html="line"></span>
  </span>
</code>
                        </pre>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { useRuntimeConfig } from '#imports';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';

export default {
    name: "ProjectMediaCard",
    props: {
        image: { type: String, default: "" },
        title: { type: String, default: "" },
        codeSnippet: { type: Array, default: () => [] }
    },
    data() {
        return {
            isCodeView: false,
            demoPlayed: false,
            demoTimeouts: []
        };
    },
    computed: {
        parsedCodeData() {
            if (!this.codeSnippet || !this.codeSnippet.length) {
                return { fileName: "code.js", language: "javascript", cleanLines: [] };
            }

            const firstLine = this.codeSnippet[0];
            let fileName = "code.js";
            let cleanLines = [...this.codeSnippet];

            const commentPattern = /^\s*(\/\/|\/\*)\s*([a-zA-Z0-9_\-\.\/ ]+\.[a-zA-Z0-9]+)/;
            const match = firstLine.match(commentPattern);

            if (match && match[2]) {
                fileName = match[2].split('/').pop();
                cleanLines.shift(); // Видаляємо рядок з коментарем, щоб він не заважав у коді
            }

            let language = "javascript";
            const extension = fileName.split('.').pop().toLowerCase();

            if (extension === 'php') {
                language = 'php';
            } else if (extension === 'vue' || extension === 'html') {
                language = 'markup';
            }

            return { fileName, language, cleanLines };
        },

        highlightedCode() {
            const { language, cleanLines } = this.parsedCodeData;
            if (!cleanLines.length) return [];

            const prismLang = Prism.languages[language] || Prism.languages.javascript || {};

            return cleanLines.map(line => {
                if (!line.trim()) return '&nbsp;';
                try {
                    return Prism.highlight(line, prismLang, language);
                } catch (e) {
                    return line.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                }
            });
        }
    },
    methods: {
        toggleView() {
            this.isCodeView = !this.isCodeView;
        },

        playDemoFlip() {
            if (this.demoPlayed) return;

            this.demoPlayed = true;

            this.demoTimeouts.push(
                setTimeout(() => {
                    this.isCodeView = true;

                    this.demoTimeouts.push(
                        setTimeout(() => {
                            this.isCodeView = false;
                        }, 1400)
                    );

                }, 1800)
            );
        },
        getImagePath(path) {
            if (!path) return "";
            const config = useRuntimeConfig();
            const base = config.app.baseURL || "/";
            const cleanBase = base.endsWith("/") ? base.slice(0, -1) : base;
            const normalized = path.startsWith("/") ? path : `/${path}`;
            return `${cleanBase}${normalized}`;
        }
    },
    mounted() {
        this.observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !this.demoPlayed) {
                this.playDemoFlip();
                this.observer.disconnect();
            }
        }, {
            threshold: 0.5
        });

        this.observer.observe(this.$el);
    },
    beforeUnmount() {
        this.demoTimeouts.forEach(clearTimeout);

        if (this.observer) {
            this.observer.disconnect();
        }
    },
};
</script>

<style scoped>
.project-card__image-container {
    width: 100%;
    height: 100%;
    perspective: 1500px;
    background: transparent;
    overflow: hidden;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    transform-style: preserve-3d;
}

.project-card__image-container.is-flipped .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.flip-card-front {
    background: #222;
}

.project-card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
}

.code-trigger-btn {
    position: absolute;
    bottom: 24px;
    right: 24px;
    background: var(--accent-green);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(212, 155, 179, 0.4);
    color: #fff;
    padding: 10px 20px;
    border-radius: 30px;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    transition: all 0.3s ease;
    z-index: 5;
}

.code-trigger-btn:hover {
    background: var(--accent-rose, #D49BB3);
    border-color: var(--accent-rose, #D49BB3);
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(212, 155, 179, 0.3);
}

.flip-card-back {
    transform: rotateY(180deg);
    background: #111111;
    border: 1px solid #2d2d2d;
    box-sizing: border-box;
}

.terminal {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.terminal-header {
    display: flex;
    align-items: center;
    background: #1a1a1a;
    padding: 14px 20px;
    border-bottom: 1px solid #282828;
}

.terminal-dots {
    display: flex;
    gap: 8px;
    cursor: pointer;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.red {
    background: #ff5f56;
}

.yellow {
    background: #ffbd2e;
}

.green {
    background: #27c93f;
}

.terminal-title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Fira Code', monospace;
    font-size: 13px;
    color: #888;
}

.terminal-close {
    margin-left: auto;
    background: transparent;
    border: 1px solid rgba(212, 155, 179, 0.3);
    color: var(--accent-rose, #D49BB3);
    padding: 4px 12px;
    border-radius: 6px;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.2s;
}

.terminal-close:hover {
    background: var(--accent-rose, #D49BB3);
    color: #fff;
}

.terminal-body {
    padding: 12px;
    overflow-y: auto;
    flex-grow: 1;
    background: #121212;
    text-align: left;
}

.terminal-body pre {
    margin: 0;
    padding: 0;
}

.terminal-body code {
    font-family: 'Fira Code', 'Courier New', monospace;
    font-size: 14px;
}

.code-line {
    display: flex;
    line-height: 1.6;
}

.line-number {
    color: #444;
    margin-right: 20px;
    user-select: none;
    width: 24px;
    text-align: right;
}

.terminal-body,
.terminal-body *,
.code-line,
.code-line span {
  user-select: text;
  -webkit-user-select: text;
  pointer-events: auto;
}
@media (max-width: 576px) {
    .terminal-close {
        padding: 3px 6px;
        font-size: 9px;
        border-radius: 4px;
    }

    .terminal-title {
        position: static;
        transform: none;
        font-size: 11px;
        margin-left: 50px;
    }

    .terminal-body {
        padding: 12px;
    }
}
</style>