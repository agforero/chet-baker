import reportText from "@/app/data/reportText";
import { Box } from "@mui/material";
import { useSearchParams } from "next/navigation";
import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function MusicPlayer() {
	const searchParams = useSearchParams();
	const allSongs = reportText.map((section) => `music/${section.song}`);

	const [currentSongIdx, setCurrentSongIdx] = React.useState<number | undefined>(undefined);
	React.useEffect(() => {
		const sectionParam = searchParams.get("section");
		if (sectionParam !== null) {
			const sectionParamConversion = Number(sectionParam);
			if (!isNaN(sectionParamConversion)) {
				setCurrentSongIdx(sectionParamConversion);
			}
		}
	}, [searchParams]);

	return (
		<Box sx={{ p: 1 }}>
			<AudioPlayer showSkipControls src={currentSongIdx !== undefined ? allSongs[currentSongIdx] : undefined} />
		</Box>
	);
}
