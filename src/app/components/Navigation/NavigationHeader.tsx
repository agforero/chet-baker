"use client";

import { HelpOutlineOutlined, MusicNoteOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import NavigationButton from "./NavigationButton";

export default function NavigationHeader() {
	return (
		<Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
			<NavigationButton
				text="Music"
				onPress={() => {}}
				tooltipContent={"Open the music player."}
				tooltipPlacement="bottom"
				startIcon={<MusicNoteOutlined />}
			/>
			<NavigationButton
				text="About"
				onPress={() => {}}
				tooltipContent={"Open the tutorial, or see more information about this page."}
				tooltipPlacement="bottom"
				endIcon={<HelpOutlineOutlined />}
			/>
		</Box>
	);
}
