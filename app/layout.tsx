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
			<body className={`bg-[#F7F7F8] ${pixel.className}`}>{children}</body>
		</html>
	);
}
