import "../styles/global.css";
import { IBM_Plex_Sans_Condensed } from "next/font/google";
import { layoutContainer } from "./style.css";
import "./globals.css";

export const metadata = {
	title: "Yield.xyz",
	description: "Yield.xyz",
};

const ibmPlexSansCondensed = IBM_Plex_Sans_Condensed({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--sk-font-ibm-plex-sans-condensed",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${ibmPlexSansCondensed.className}`}>
			<link rel="icon" href="/icon.png" />
			<body className={layoutContainer}>{children}</body>
		</html>
	);
}
