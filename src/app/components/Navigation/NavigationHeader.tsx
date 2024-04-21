"use client";

import { HelpOutlineOutlined, MusicNoteOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import NavigationButton from "./NavigationButton";
import React from "react";
import MusicPlayer from "../MusicPlayer/MusicPlayer";

export default function NavigationHeader() {
	const [musicPlayerOpen, setMusicPlayerOpen] = React.useState<boolean>(false);

	return (
		<Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
			<MusicPlayer />
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
