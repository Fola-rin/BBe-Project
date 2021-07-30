module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			maxWidth: {
				"1224px": "1224px",
			},
			boxShadow: {
				header: "0px 0px 2px rgba(0, 0, 0, 0.25)",
			},
			padding: {
				header: "30px 7%",
				logo: "10px 0",
			},
			zIndex: {
				"1-": -1,
			},
			fontFamily: {
				"red-hat": "'Red Hat Display', sans-serif",
				"source-code": "'Source Code Pro', monospace",
				"red-hat-text": "'Red Hat Text', sans-serif;",
			},
			colors: {
				"code-green": "#06AB0D",
				"hover-red": "#FF0000",
				"hover-blue": "#0066FF",
				"input-color": "#747272",
				"5A7889": "#5A7889",
				"3f5461": "#3f5461",
				"0066FF": "#0066FF",
				"0049b7": "#0049b7",
				FF0000: "#FF0000",
				c50101: "#c50101",
				E5E5E5: "#E5E5E5",
				"06AB0D": "#06AB0D",
				747272: "#747272",
			},
			letterSpacing: {
				0.15: "0.15em",
			},
			inset: {
				"1/5": "20%",
				"2/5": "40%",
				"3/5": "60%",
				"4/5": "80%",
			},
			width: {
				"30-percent": "30%",
				"35-percent": "35%",
			},
			height: {
				460: "460px",
			},
			minHeight: {
				400: "400px",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
