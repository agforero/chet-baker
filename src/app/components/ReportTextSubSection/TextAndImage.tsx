import { Box } from "@mui/material";
import Markdown from "react-markdown";

interface TextAndImageProps {
	text?: string;
	image: string;
	idx: number;
}

export default function TextAndImage(props: TextAndImageProps) {
	return (
		<Box sx={{ display: "flex", flexDirection: props.idx % 2 ? "row" : "row-reverse" }} gap={4}>
			<Box sx={{ flex: "0 0 auto" }}>
				<img
					style={{ height: "600px", width: "auto", border: "5px solid white" }}
					src={`/${props.image}`}
					alt={props.image}
				/>
			</Box>
			<Box
				sx={{
					flex: "1 1 100%",
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					width: "100%",
				}}
			>
				<span
					style={{
						maxWidth: "400px",
						fontFamily: "inherit",
						textAlign: props.idx % 2 ? "left" : "right",
					}}
				>
					<Markdown>{props.text}</Markdown>
				</span>
			</Box>
		</Box>
	);
}
