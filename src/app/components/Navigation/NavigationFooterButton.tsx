import theme from "@/theme";
import { Button, Fade, ThemeProvider, Tooltip } from "@mui/material";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({ weight: "300", subsets: ["latin"] });

interface NavigationFooterButtonProps {
	text: string;
	onPress: Function;
	startIcon?: any;
	endIcon?: any;
	tooltipContent: string | React.ReactElement;
	tooltipOpen?: boolean;
}

export default function NavigationFooterButton(props: NavigationFooterButtonProps) {
	return (
		<ThemeProvider theme={theme}>
			<Tooltip
				title={props.tooltipContent}
				open={props.tooltipOpen}
				sx={{ fontSize: "24px" }}
				TransitionComponent={Fade}
				TransitionProps={{ timeout: 300 }}
				enterDelay={500}
				arrow
			>
				<Button
					color="white"
					className={merriweather.className}
					variant="outlined"
					startIcon={props.startIcon ? props.startIcon : undefined}
					endIcon={props.endIcon ? props.endIcon : undefined}
					onClick={() => props.onPress()}
					onTouchStart={() => props.onPress()}
					sx={{ fontSize: "unset" }}
				>
					{props.text}
				</Button>
			</Tooltip>
		</ThemeProvider>
	);
}
