/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'3xl': '1900px',
			}
		},
	},
	plugins: [],
}
