import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import { Box, Container } from "@mui/material";
import NavigationFooter from "./components/Navigation/NavigationFooter";

const merriweather = Merriweather({ weight: "300", subsets: ["latin"] });

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
				className={merriweather.className}
				style={{
					display: "flex",
					flexDirection: "column",
					height: "100vh",
					width: "100vw",
					overflowY: "hidden",
					backgroundImage: "url('background.png')",
					backgroundRepeat: "no-repeat",
					backgroundAttachment: "fixed",
					backgroundPosition: "center",
				}}
			>
				<Container maxWidth="lg" sx={{ flex: "1 1 100%", height: "100%", width: "100%", overflowY: "hidden" }}>
					{children}
				</Container>
				<Box sx={{ flex: "0 0 auto", p: 1 }}>
					<NavigationFooter />
				</Box>
			</body>
		</html>
	);
}
