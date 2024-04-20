"use client";

import theme from "@/theme";
import { ArrowBackOutlined, ArrowForwardOutlined, HelpOutlineOutlined, MusicNoteOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Merriweather } from "next/font/google";
import { useRouter } from "next/navigation";
import NavigationFooterButton from "./NavigationFooterButton";

const merriweather = Merriweather({ weight: "300", subsets: ["latin"] });

export default function NavigationFooter() {
	const router = useRouter();
	return (
		<Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
			<NavigationFooterButton onPress={() => {}} text="Previous" startIcon={<ArrowBackOutlined />} />
			<NavigationFooterButton onPress={() => {}} text="Music Player" startIcon={<MusicNoteOutlined />} />
			<NavigationFooterButton onPress={() => {}} text="Help/About" endIcon={<HelpOutlineOutlined />} />
			<NavigationFooterButton onPress={() => {}} text="Next" endIcon={<ArrowForwardOutlined />} />
		</Box>
	);
}
