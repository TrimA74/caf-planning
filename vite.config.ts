import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	// https://github.com/googlemaps/js-api-loader/issues/692#issuecomment-1399359795
	ssr: {
		noExternal: ['@googlemaps/js-api-loader']
	}
});
