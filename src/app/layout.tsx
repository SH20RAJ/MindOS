import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
	variable: "--font-outfit",
	subsets: ["latin"],
	display: "swap",
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		default: "MindOS",
		template: "%s | MindOS",
	},
	description: "Learn Everything. Scientifically. Fast. AI-driven knowledge management for developers.",
	keywords: ["learning", "spaced repetition", "active recall", "developer tools", "knowledge management", "second brain"],
	openGraph: {
		title: "MindOS",
		description: "Learn Everything. Scientifically. Fast.",
		type: "website",
		locale: "en_US",
		siteName: "MindOS",
	},
	twitter: {
		card: "summary_large_image",
		title: "MindOS",
		description: "Learn Everything. Scientifically. Fast.",
	},
};

import { StackProvider } from "@stackframe/stack";
import { stackServerApp } from "@/stack";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body
				className={`${outfit.variable} ${inter.variable} antialiased bg-background text-foreground flex flex-col min-h-screen font-sans`}
			>
				<StackProvider app={stackServerApp}>
					<TooltipProvider>
						{children}
					</TooltipProvider>
				</StackProvider>
			</body>
		</html>
	);
}
