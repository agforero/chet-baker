import reportText from "@/app/data/reportText";
import { ReportTextSubSectionState } from "@/app/data/reportTextInterface";
import { Box, Typography } from "@mui/material";
import { useSearchParams, useRouter } from "next/navigation";
import React from "react";
import ReportTextSubSectionDisplay from "../ReportTextSubSection/ReportTextSubSectionDisplay";

function getSubSection(section?: number, subSection?: number): ReportTextSubSectionState | undefined {
	if (section !== undefined && subSection !== undefined) {
		if (section < reportText.length) {
			if (subSection < reportText[section].subSections.length) {
				return reportText[section].subSections[subSection];
			}
		}
	}
	return;
}

function normalizeSearchParam(searchParam: string, withinArray: Array<any>): number {
	const conversion = Number(searchParam);
	return !isNaN(conversion) && conversion < withinArray.length ? conversion : 0;
}

export default function ReportTextBody() {
	const searchParams = useSearchParams();

	const [section, setSection] = React.useState<number | undefined>(undefined);
	const [subSection, setSubSection] = React.useState<number | undefined>(undefined);

	React.useEffect(() => {
		const normalizedSection = normalizeSearchParam(searchParams.get("section") || "", reportText);
		const normalizedSubSection = normalizeSearchParam(
			searchParams.get("subSection") || "",
			reportText[normalizedSection].subSections,
		);

		setSection(normalizedSection);
		setSubSection(normalizedSubSection);
	}, [searchParams]);

	return (
		<Box sx={{ width: "100%", overflowY: "auto" }}>
			<ReportTextSubSectionDisplay subSection={getSubSection(section, subSection)} />
		</Box>
	);
}