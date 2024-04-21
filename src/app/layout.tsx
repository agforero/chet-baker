import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { Suspense } from "react";
import theme from "./theme";

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
					<ThemeProvider theme={theme}>{children}</ThemeProvider>
				</Suspense>
			</body>
		</html>
	);
}
