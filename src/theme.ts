import { createTheme } from "@mui/material";
import { amber } from "@mui/material/colors";

declare module "@mui/material/styles" {
	interface Palette {
		white: Palette["primary"];
		amber: Palette["primary"];
	}

	interface PaletteOptions {
		white?: PaletteOptions["primary"];
		amber?: PaletteOptions["primary"];
	}
}

declare module "@mui/material/Button" {
	interface ButtonPropsColorOverrides {
		white: true;
		amber: true;
	}
}

const theme = createTheme({
	palette: {
		white: {
			main: "#fff",
			light: "#fff",
			dark: "#fff",
			contrastText: "#000",
		},
		amber: {
			main: amber[200],
			light: amber[50],
			dark: amber[500],
			contrastText: "black",
		},
	},
});

theme.components = {
	MuiTooltip: {
		styleOverrides: {
			tooltip: {
				fontSize: "16px",
				textAlign: "center",
				backgroundColor: "transparent",
				border: "1px solid white",
				"&.amberTooltip": {
					color: amber[200],
					border: `1px solid ${amber[200]}`,
				},
			},
			arrow: {
				"&:before": {
					backgroundColor: "transparent",
					border: "1px solid white",
				},
				"&.amberTooltip": {
					"&:before": {
						border: `1px solid ${amber[200]}`,
					},
				},
			},
		},
	},
};

export default theme;
