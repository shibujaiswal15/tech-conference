import { sveltekit } from '@sveltejs/kit/vite';

export default {
  plugins: [sveltekit()],
  server: {
    hmr: false // Remove this line if it exists
  }
};
