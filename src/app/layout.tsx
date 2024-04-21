import type { Metadata } from "next";
import "./globals.css";
import { Box, Container } from "@mui/material";
import NavigationFooter from "./components/Navigation/NavigationFooter";
import NavigationHeader from "./components/Navigation/NavigationHeader";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "Chet Baker's Fame and Impact",
	description: "A project by Maximos Forero.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				style={{
					height: "100vh",
					width: "100vw",
					overflowY: "hidden",
					backgroundImage: "url('background.png')",
					backgroundRepeat: "no-repeat",
					backgroundAttachment: "fixed",
					backgroundPosition: "center",
					margin: "0px",
				}}
			>
				<Suspense>
					{/* <Box sx={{ flex: "0 0 auto", p: 1 }}>
						<NavigationHeader />
					</Box> */}
					{children}
				</Suspense>
			</body>
		</html>
	);
}
