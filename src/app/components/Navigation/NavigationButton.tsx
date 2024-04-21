import theme from "@/app/theme";
import { Box, Button, Fade, ThemeProvider, Tooltip } from "@mui/material";
import React from "react";

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
	const [tooltipOpen, setTooltipOpen] = React.useState<boolean | undefined>(props.tooltipOpen);
	React.useEffect(() => {
		setTooltipOpen(!!props.tooltipOpen);
	}, [props.tooltipOpen]);

	return (
		<ThemeProvider theme={theme}>
			<Tooltip
				componentsProps={
					props.amber ? { tooltip: { className: "amberTooltip" }, arrow: { className: "amberTooltip" } } : undefined
				}
				title={!props.disabled ? props.tooltipContent : ""}
				open={tooltipOpen}
				sx={{ fontSize: "24px" }}
				TransitionComponent={Fade}
				TransitionProps={{ timeout: 300 }}
				enterDelay={500}
				arrow
			>
				<span>
					<Button
						color={!props.amber ? "primary" : "amber"}
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
