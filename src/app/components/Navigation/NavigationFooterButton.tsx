import theme from "@/theme";
import { Button, ThemeProvider } from "@mui/material";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({ weight: "300", subsets: ["latin"] });

interface NavigationFooterButtonProps {
	text: string;
	onPress: Function;
	startIcon?: any;
	endIcon?: any;
}

export default function NavigationFooterButton(props: NavigationFooterButtonProps) {
	return (
		<ThemeProvider theme={theme}>
			<Button
				color="white"
				className={merriweather.className}
				variant="outlined"
				startIcon={props.startIcon ? props.startIcon : undefined}
				endIcon={props.endIcon ? props.endIcon : undefined}
				onClick={() => props.onPress()}
				onTouchStart={() => props.onPress()}
			>
				{props.text}
			</Button>
		</ThemeProvider>
	);
}
