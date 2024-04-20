import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import { Container } from "@mui/material";

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
					backgroundImage: "url('background.png')",
					backgroundRepeat: "no-repeat",
					backgroundAttachment: "fixed",
					backgroundPosition: "center",
				}}
			>
				<Container maxWidth="lg">{children}</Container>
			</body>
		</html>
	);
}
