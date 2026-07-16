const fs = require('fs');
const path = require('path');
const root = path.resolve('.');
const scssFiles = [];
const vueFiles = [];
const skipDirs = new Set(['node_modules', 'dist', '.git', '.nuxt', 'tmp']);
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (skipDirs.has(entry.name)) continue;
      walk(full);
    } else if (entry.isFile()) {
      if (full.endsWith('.scss')) scssFiles.push(full);
      else if (full.endsWith('.vue')) vueFiles.push(full);
    }
  }
}
walk(root);
const palette = {
  '#ffffff': 'var(--text-primary)',
  '#fff': 'var(--text-primary)',
  '#000000': 'var(--bg-primary)',
  '#000': 'var(--bg-primary)',
  '#05050a': 'var(--bg-primary)',
  '#0e0c1a': 'var(--bg-secondary)',
  '#1b1633': 'var(--border-color)',
  '#7d799a': 'var(--text-muted)',
  '#ff2e93': 'var(--accent-rose)',
  '#3f00ff': 'var(--accent-blue)',
  '#ff8a00': 'var(--accent-orange)',
  '#df5430': 'var(--accent-orange)',
  '#ed212c': 'var(--accent-orange)',
  '#4353ff': 'var(--accent-blue)',
  '#3661fc': 'var(--accent-blue)',
  '#2fa7ff': 'var(--accent-blue)',
  '#31a8ff': 'var(--accent-blue)',
  '#ff91fa': 'var(--accent-rose)',
  '#f06ff3': 'var(--accent-rose)',
  '#525258': 'var(--text-muted)',
  '#5253ce': 'var(--accent-blue)',
  '#9d9da3': 'var(--text-muted)',
  '#84848b': 'var(--text-muted)',
  '#6b6b7b': 'var(--text-muted)',
  '#343438': 'var(--text-muted)',
  '#a3a3aa': 'var(--text-muted)',
  '#b0b0b8': 'var(--text-muted)',
  '#bdbdc6': 'var(--text-muted)',
};
const usedHex = new Set();
const allFiles = [...scssFiles, ...vueFiles];
const hexRegex = /#[0-9A-Fa-f]{3}(?:[0-9A-Fa-f]{3})?\b/g;
for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf8');
  if (file.endsWith('.vue')) {
    const styleRegex = /(<style[\s\S]*?>)([\s\S]*?)(<\/style>)/gi;
    let match;
    while ((match = styleRegex.exec(content))) {
      const styleContent = match[2];
      for (const m of styleContent.matchAll(hexRegex)) {
        usedHex.add(normalizeHex(m[0]));
      }
    }
  } else {
    for (const m of content.matchAll(hexRegex)) {
      usedHex.add(normalizeHex(m[0]));
    }
  }
}
function normalizeHex(hex) {
  const clean = hex.toLowerCase();
  if (clean.length === 4) {
    return '#' + clean[1] + clean[1] + clean[2] + clean[2] + clean[3] + clean[3];
  }
  return clean;
}
function toVarName(hex) {
  const key = hex.toLowerCase();
  if (palette[key]) return palette[key];
  return `var(--color-${key.slice(1)})`;
}
function toRgbVar(hex) {
  const key = hex.toLowerCase();
  if (palette[key]) {
    switch (PaletteRgbMap[key]) {
      case 'text-primary': return 'var(--text-primary-rgb)';
      case 'bg-primary': return 'var(--bg-primary-rgb)';
      case 'bg-secondary': return 'var(--bg-secondary-rgb)';
      case 'border-color': return 'var(--border-color-rgb)';
      case 'text-muted': return 'var(--text-muted-rgb)';
      case 'accent-rose': return 'var(--accent-rose-rgb)';
      case 'accent-blue': return 'var(--accent-blue-rgb)';
      case 'accent-orange': return 'var(--accent-orange-rgb)';
      default: break;
    }
  }
  return `var(--color-${key.slice(1)}-rgb)`;
}
const PaletteRgbMap = {
  '#ffffff': 'text-primary',
  '#fff': 'text-primary',
  '#000000': 'bg-primary',
  '#000': 'bg-primary',
  '#05050a': 'bg-primary',
  '#0e0c1a': 'bg-secondary',
  '#1b1633': 'border-color',
  '#7d799a': 'text-muted',
  '#ff2e93': 'accent-rose',
  '#3f00ff': 'accent-blue',
  '#ff8a00': 'accent-orange',
  '#df5430': 'accent-orange',
  '#ed212c': 'accent-orange',
  '#4353ff': 'accent-blue',
  '#3661fc': 'accent-blue',
  '#2fa7ff': 'accent-blue',
  '#31a8ff': 'accent-blue',
  '#ff91fa': 'accent-rose',
  '#f06ff3': 'accent-rose',
  '#525258': 'text-muted',
  '#5253ce': 'accent-blue',
  '#9d9da3': 'text-muted',
  '#84848b': 'text-muted',
  '#6b6b7b': 'text-muted',
  '#343438': 'text-muted',
  '#a3a3aa': 'text-muted',
  '#b0b0b8': 'text-muted',
  '#bdbdc6': 'text-muted',
};
const customVars = {};
for (const hex of usedHex) {
  if (!palette[hex]) {
    customVars[hex] = `--color-${hex.slice(1)}`;
  }
}
const rootPath = path.join(root, 'assets', 'scss', 'utils', '_root.scss');
const rootContent = fs.readFileSync(rootPath, 'utf8');
const blockLines = [];
blockLines.push('    /* AUTO PROJECT COLOR VARIABLES START */');
blockLines.push('    /* Main palette variables */');
blockLines.push('    --bg-primary: #05050A;');
blockLines.push('    --bg-primary-rgb: 5, 5, 10;');
blockLines.push('    --bg-secondary: #0E0C1A;');
blockLines.push('    --bg-secondary-rgb: 14, 12, 26;');
blockLines.push('    --border-color: #1B1633;');
blockLines.push('    --border-color-rgb: 27, 22, 51;');
blockLines.push('    --text-primary: #FFFFFF;');
blockLines.push('    --text-primary-rgb: 255, 255, 255;');
blockLines.push('    --text-muted: #7D799A;');
blockLines.push('    --text-muted-rgb: 125, 121, 154;');
blockLines.push('    --accent-rose: #FF2E93;');
blockLines.push('    --accent-rose-rgb: 255, 46, 147;');
blockLines.push('    --accent-blue: #3F00FF;');
blockLines.push('    --accent-blue-rgb: 63, 0, 255;');
blockLines.push('    --accent-orange: #FF8A00;');
blockLines.push('    --accent-orange-rgb: 255, 138, 0;');
blockLines.push('    --gradient-rose: linear-gradient(90deg, #FF2E93 0%, #FF8A00 100%);');
blockLines.push('');
blockLines.push('    /* Generated project color variables */');
for (const hex of Object.keys(customVars).sort()) {
  const rgb = hexToRgb(hex);
  blockLines.push(`    ${customVars[hex]}: ${hex};`);
  blockLines.push(`    ${customVars[hex]}-rgb: ${rgb};`);
}
blockLines.push('    /* AUTO PROJECT COLOR VARIABLES END */');
let newRootContent;
if (rootContent.includes('/* AUTO PROJECT COLOR VARIABLES START */')) {
  newRootContent = rootContent.replace(/\s*\/\* AUTO PROJECT COLOR VARIABLES START \*\/[\s\S]*?\/\* AUTO PROJECT COLOR VARIABLES END \*\//, blockLines.join('\n'));
} else {
  newRootContent = rootContent.replace(/:root \{\r?\n/, `:root {\n${blockLines.join('\n')}\n`);
}
fs.writeFileSync(rootPath, newRootContent, 'utf8');
const replaceColorTokens = (text) => {
  const replacedRGBA = text.replace(/rgba\(\$color:\s*(#[0-9A-Fa-f]{3}(?:[0-9A-Fa-f]{3})?)\s*,\s*\$alpha:\s*([^\)]+)\)/gi,
    (_, hex, alpha) => `rgba(${toRgbVar(normalizeHex(hex))}, ${alpha})`
  );
  const replacedRGBACSS = replacedRGBA.replace(/rgba\(\s*(#[0-9A-Fa-f]{3}(?:[0-9A-Fa-f]{3})?)\s*,\s*([^\)]+)\)/gi,
    (_, hex, alpha) => `rgba(${toRgbVar(normalizeHex(hex))}, ${alpha})`
  );
  return replacedRGBACSS.replace(/(#[0-9A-Fa-f]{3}(?:[0-9A-Fa-f]{3})?)\b/g, (match) => toVarName(normalizeHex(match)));
};
let totalReplacements = 0;
for (const file of scssFiles) {
  let content = fs.readFileSync(file, 'utf8');
  const result = replaceColorTokens(content);
  if (result !== content) {
    totalReplacements += (content.match(/#[0-9A-Fa-f]{3}(?:[0-9A-Fa-f]{3})?\b/g) || []).length;
    fs.writeFileSync(file, result, 'utf8');
  }
}
for (const file of vueFiles) {
  let content = fs.readFileSync(file, 'utf8');
  const styleRegex = /(<style[\s\S]*?>)([\s\S]*?)(<\/style>)/gi;
  let changed = false;
  content = content.replace(styleRegex, (_, open, styleContent, close) => {
    const replaced = replaceColorTokens(styleContent);
    if (replaced !== styleContent) {
      changed = true;
    }
    return open + replaced + close;
  });
  if (changed) {
    totalReplacements += 1;
    fs.writeFileSync(file, content, 'utf8');
  }
}
console.log(`Processed ${scssFiles.length} SCSS files and ${vueFiles.length} Vue files.`);
console.log(`Generated ${Object.keys(customVars).length} custom color variables.`);
console.log(`Total files modified: ${totalReplacements}`);
function hexToRgb(hex) {
  const normalized = normalizeHex(hex).slice(1);
  const r = parseInt(normalized.slice(0, 2), 16);
  const g = parseInt(normalized.slice(2, 4), 16);
  const b = parseInt(normalized.slice(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}
