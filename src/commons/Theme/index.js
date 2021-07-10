import { createTheme } from "@material-ui/core/styles";
const theme = createTheme({
	palette: {
		primary: {
			main: "#00695f",
		},
		secondary: {
			main: "#33c9dc",
		},
		error: {
			main: "#E64A19",
		},
	},
	typography: {
		fontFamily: "roboto",
	},
	shape: {
		borderRadius: 4,
		backgroundColor: "#7B1FA2",
		textColor: "#fff",
		borderColor: "#ccc",
	},
});

export default theme;
