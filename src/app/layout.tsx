import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
config.autoAddCss = false; // Disable the automatic CSS injection

export const metadata: Metadata = {
	title: {
		template: '%s | Mememos',
		default: 'Mememos'
	},
	description: "Mememos is a web application built using Next.js. This app allows users to create, edit, and delete memos using local storage. Users can freely create memos and modify or remove them as needed. This provides a convenient environment for users to store and access important information or ideas. With the flexibility to adapt to various purposes, this app supports efficient information management and can enhance user productivity.",

	generator: "Next.js",
	metadataBase: new URL('https://mememos.vercel.app'),

	manifest: "/webmanifest.json",

	appleWebApp: { capable: true, title: "Mememos", statusBarStyle: "black-translucent" },
	verification: { "me": "https://github.com/Fun117" },
	publisher: "Vercel",
	creator: "Fun117",
	authors: [{ name: "Fun117", url: "https://github.com/Fun117" }],

	category: "Mememos",
	classification: "Mememos",
	keywords: "fun117,mememos",

	applicationName: "Mememos",
	openGraph: {
		type: "website",
		url: "https://mememos.vercel.app/",
		title: "Mememos",
		description: "description",
		siteName: "Mememos",
		images: [{
			url: "/assets/img/brand/mememos/mememos_512x512.png",
		}],
	},

	bookmarks: "https://mememos.vercel.app/"
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body className={`${inter.className} fixed w-full h-full overflow-scroll bg-zinc-900 text-slate-50`}>{children}</body>
		</html>
	);
}
