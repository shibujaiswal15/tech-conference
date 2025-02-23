// import { sveltekit } from '@sveltejs/kit/vite';
// import { defineConfig } from 'vite';

// export default defineConfig({
// 	plugins: [sveltekit()]
// });


import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    sveltekit(),
  ],
  server: {
    // Enabling HMR and setting port if needed
    hmr: {
      clientPort: 3000, // specify client-side HMR port (optional)
    },
  },
  build: {
    // Customize build options if needed
    target: 'esnext', // Target modern JS environments
    polyfillDynamicImport: false, // Disable polyfills for dynamic imports (optional)
  },
  optimizeDeps: {
    // Add specific libraries to optimize or exclude
    include: ['svelte', '@sveltejs/kit'],
    exclude: ['some-library-you-want-to-exclude'], // optional
  },
});

