import { ReportTextSubSectionState } from "@/app/data/reportTextInterface";
import { Box, Typography } from "@mui/material";
import React from "react";
import Markdown from "react-markdown";
import TextAndImage from "./TextAndImage";

interface ReportTextSubSectionDisplayProps {
	subSection?: ReportTextSubSectionState;
	idx?: number;
}

export default function ReportTextSubSectionDisplay(props: ReportTextSubSectionDisplayProps) {
	return !!props.subSection ? (
		!!props.subSection.image ? (
			<Box sx={{ width: "100%" }}>
				<TextAndImage text={props.subSection.text} image={props.subSection.image} idx={props.idx || 0} />
			</Box>
		) : (
			<span style={{ fontFamily: "inherit" }}>
				<Markdown>{props.subSection.text}</Markdown>
			</span>
		)
	) : (
		<React.Fragment />
	);
}
