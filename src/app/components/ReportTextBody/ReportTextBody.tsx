import reportText from "@/app/data/reportText";
import { ReportTextSubSectionState } from "@/app/data/reportTextInterface";
import { Box, Typography } from "@mui/material";
import { useSearchParams, useRouter } from "next/navigation";
import React, { Suspense } from "react";
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

// if this returns undefined, push 0 to router
function normalizeSearchParam(searchParam: string, withinArray: Array<any>): number | undefined {
	const conversion = Number(searchParam);
	return !isNaN(conversion) && conversion < withinArray.length ? conversion : undefined;
}

export default function ReportTextBody() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const [section, setSection] = React.useState<number | undefined>(undefined);
	const [subSection, setSubSection] = React.useState<number | undefined>(undefined);

	React.useEffect(() => {
		// prettier-ignore
		const normalizedSection = normalizeSearchParam(
      searchParams.get("section") || "", 
      reportText
    );
		if (normalizedSection === undefined) {
			router.push("/?section=0&subSection=0");
			return;
		}

		const normalizedSubSection = normalizeSearchParam(
			searchParams.get("subSection") || "",
			reportText[normalizedSection].subSections,
		);
		if (normalizedSubSection === undefined) {
			router.push(`/?section=${normalizedSection}&subSection=0`);
			return;
		}

		setSection(normalizedSection);
		setSubSection(normalizedSubSection);
	}, [searchParams]); // eslint-disable-line

	return (
		<Suspense>
			<Box sx={{ width: "100%", overflowY: "auto" }}>
				<ReportTextSubSectionDisplay subSection={getSubSection(section, subSection)} idx={subSection} />
			</Box>
		</Suspense>
	);
}
