"use client";

import { Box } from "@mui/material";
import ReportTextBody from "./components/ReportTextBody/ReportTextBody";

export default function Home() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				overflowY: "hidden",
				height: "100%",
				width: "100%",
			}}
		>
			<ReportTextBody />
		</Box>
	);
}
