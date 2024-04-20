import { ReportTextSubSectionState } from "@/app/data/reportTextInterface";
import { Typography } from "@mui/material";
import React from "react";
import Markdown from "react-markdown";

interface ReportTextSubSectionDisplayProps {
	subSection?: ReportTextSubSectionState;
}

export default function ReportTextSubSectionDisplay(props: ReportTextSubSectionDisplayProps) {
	return !!props.subSection ? (
		<span style={{ fontFamily: "inherit" }}>
			<Markdown>{props.subSection.text}</Markdown>
		</span>
	) : (
		<React.Fragment />
	);
}
