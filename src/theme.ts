import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
	interface Palette {
		white: Palette["primary"];
	}

	interface PaletteOptions {
		white?: PaletteOptions["primary"];
	}
}

declare module "@mui/material/Button" {
	interface ButtonPropsColorOverrides {
		white: true;
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
	},
});

theme.components = {
	MuiTooltip: {
		styleOverrides: {
			tooltip: {
				fontSize: "14px",
				textAlign: "center",
				backgroundColor: "transparent",
				border: "1px solid white",
			},
			arrow: {
				"&:before": {
					backgroundColor: "white",
					border: "1px solid white",
				},
			},
		},
	},
};

export default theme;
