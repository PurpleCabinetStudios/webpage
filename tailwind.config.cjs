/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'display': ["Tektur", "monospace"],
			'body': ["Roboto Flex", "sans-serif"]
		},
		extend: {},
	},
	plugins: [require('@tailwindcss/typography'),],
}
