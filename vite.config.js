// import { sveltekit } from '@sveltejs/kit/vite';
// import { defineConfig } from 'vite';

// export default defineConfig({
// 	plugins: [sveltekit()]
 //});


 import { sveltekit } from '@sveltejs/kit/vite';
 import { defineConfig } from 'vite';
 
 export default defineConfig({
   plugins: [
	 sveltekit(),
   ],
   server: {
	 hmr: {
	   clientPort: 3000, // You can specify a port here if needed
	 },
   },
   build: {
	 target: 'esnext',
	 polyfillDynamicImport: false,
   },
   optimizeDeps: {
	 include: ['svelte', '@sveltejs/kit'],
   },
 });
 