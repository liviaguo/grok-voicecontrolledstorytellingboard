import { defineConfig } from 'vite';

// Relative base so the same build works on localhost, GitHub Pages
// (https://liviaguo.github.io/grok-voicecontrolledstorytellingboard/) or any sub-path.
export default defineConfig({
  base: './',
});
