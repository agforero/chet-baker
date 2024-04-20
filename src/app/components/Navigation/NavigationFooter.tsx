"use client";

import { ArrowBackOutlined, ArrowForwardOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import NavigationButton from "./NavigationButton";
import React from "react";
import reportText from "@/app/data/reportText";

export default function NavigationFooter() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const [section, setSection] = React.useState<number>(NaN);
	const [subSection, setSubSection] = React.useState<number>(NaN);

	React.useEffect(() => {
		const sectionParam = searchParams.get("section");
		const subSectionParam = searchParams.get("subSection");

		setSection(sectionParam !== null ? Number(sectionParam) : NaN);
		setSubSection(subSectionParam !== null ? Number(subSectionParam) : NaN);
	}, [searchParams]);

	const [previousDisabled, setPreviousDisabled] = React.useState<boolean>(true);
	const [nextDisabled, setNextDisabled] = React.useState<boolean>(true);
	React.useEffect(() => {
		setPreviousDisabled(isNaN(section) || isNaN(subSection) || (section === 0 && subSection === 0));
		setNextDisabled(
			isNaN(section) ||
				isNaN(subSection) ||
				(section === reportText.length - 1 && subSection === reportText.slice(-1)[0].subSections.length - 1),
		);
	}, [section, subSection]);

	// this and handleNext() are going to trust that <ReportTextBody/> will
	// correctly set the searchparams
	const handlePrevious = () => {
		if (section === 0 && subSection === 0) {
			return;
		} else if (subSection === 0) {
			const prevSectionIdx = section - 1;
			const prevSubSectionIdx = reportText[prevSectionIdx].subSections.length - 1;
			router.push(`/?section=${prevSectionIdx}&subSection=${prevSubSectionIdx}`);
		} else {
			const prevSubSectionIdx = subSection - 1;
			router.push(`/?section=${section}&subSection=${prevSubSectionIdx}`);
		}
	};

	const handleNext = () => {
		if (section === reportText.length - 1 && subSection === reportText.slice(-1)[0].subSections.length - 1) {
			return;
		} else if (subSection === reportText[section].subSections.length - 1) {
			const nextSectionIdx = section + 1;
			const nextSubSectionIdx = 0;
			router.push(`/?section=${nextSectionIdx}&subSection=${nextSubSectionIdx}`);
		} else {
			const nextSubSectionIdx = subSection + 1;
			router.push(`/?section=${section}&subSection=${nextSubSectionIdx}`);
		}
	};

	return (
		<Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
			<NavigationButton
				text="Previous"
				onPress={() => handlePrevious()}
				disabled={previousDisabled}
				tooltipContent={"Navigate to the previous sub-section."}
				tooltipPlacement="top"
				startIcon={<ArrowBackOutlined />}
			/>
			<NavigationButton
				text="Next"
				onPress={() => handleNext()}
				disabled={nextDisabled}
				tooltipContent={"Navigate to the next sub-section."}
				tooltipPlacement="top"
				endIcon={<ArrowForwardOutlined />}
			/>
		</Box>
	);
}
