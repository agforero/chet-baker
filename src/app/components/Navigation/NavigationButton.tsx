import theme from "@/theme";
import { Box, Button, Fade, ThemeProvider, Tooltip } from "@mui/material";

interface NavigationButtonProps {
	text: string;
	onPress: Function;
	amber?: boolean;
	disabled?: boolean;
	startIcon?: any;
	endIcon?: any;
	tooltipContent: string | React.ReactElement;
	tooltipPlacement: string;
	tooltipOpen?: boolean;
}

export default function NavigationButton(props: NavigationButtonProps) {
	return (
		<ThemeProvider theme={theme}>
			<Tooltip
				componentsProps={
					props.amber ? { tooltip: { className: "amberTooltip" }, arrow: { className: "amberTooltip" } } : undefined
				}
				title={!props.disabled ? props.tooltipContent : ""}
				open={props.tooltipOpen}
				sx={{ fontSize: "24px" }}
				TransitionComponent={Fade}
				TransitionProps={{ timeout: 300 }}
				enterDelay={500}
				arrow
			>
				<span>
					<Button
						color={!props.amber ? "white" : "amber"}
						variant="outlined"
						startIcon={props.startIcon ? props.startIcon : undefined}
						endIcon={props.endIcon ? props.endIcon : undefined}
						onClick={() => props.onPress()}
						onTouchStart={() => props.onPress()}
						disabled={props.disabled}
						sx={{ fontSize: "unset" }}
					>
						{props.text}
					</Button>
				</span>
			</Tooltip>
		</ThemeProvider>
	);
}
