"use client";

import theme from "@/theme";
import { ArrowBackOutlined, ArrowForwardOutlined } from "@mui/icons-material";
import { Box, Button, ThemeProvider } from "@mui/material";
import { Merriweather } from "next/font/google";
import { useRouter } from "next/navigation";

const merriweather = Merriweather({ weight: "300", subsets: ["latin"] });

export default function NavigationFooter() {
	const router = useRouter();
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
				<Button color="white" className={merriweather.className} variant="outlined" startIcon={<ArrowBackOutlined />}>
					Previous
				</Button>
				<Button color="white" className={merriweather.className} variant="outlined" endIcon={<ArrowForwardOutlined />}>
					Next
				</Button>
			</Box>
		</ThemeProvider>
	);
}
