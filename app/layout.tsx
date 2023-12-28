import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";

const pixel = Pixelify_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Rammah's Portfolio",
	description:
		"A porfolio website showcasing all my skills, projects, and experience",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<script
					data-goatcounter="https://rammah.goatcounter.com/count"
					async
					src="//gc.zgo.at/count.js"></script>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest"></link>
			</head>
			<body className={`bg-[#F7F7F8] ${pixel.className}`}>{children}</body>
		</html>
	);
}
