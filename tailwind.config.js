/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"slate-black": "#171717",
				"sub-gray": "#202027",
			},
		},
		fontFamily: {
			subheadings: ['"Plus Jakarta"', "sans-serif"],
			body: ['"Space Grotesk"', "arial"],
		},
	},
	plugins: [],
};
