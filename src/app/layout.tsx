import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/components/ui/provider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
	display: "swap",
	fallback: ["system-ui", "arial"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
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

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "@/stack";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}
			>
				<StackProvider app={stackServerApp}>
					{children}
					<Navbar />
					<Footer />
				</StackProvider>
			</body>
		</html>
	);
}
