import type { Metadata, Viewport } from "next";
import {
  Instrument_Sans,
  Pixelify_Sans,
  Shantell_Sans,
} from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

const shantellSans = Shantell_Sans({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

const description =
  "Nikhil Thapa is a full-stack and generative AI developer in Dubai. He builds scalable web platforms, RAG pipelines, AI agents, and production-ready LLM systems.";

export const metadata: Metadata = {
  metadataBase: new URL("https://nikhilthapa.vercel.app"),
  title: "Nikhil Thapa — Full-Stack Developer",
  description,
  keywords: [
    "Nikhil Thapa",
    "Full-Stack Developer",
    "Generative AI Developer",
    "RAG",
    "LangChain",
    "LangGraph",
    "Next.js",
    "NuxtJS",
    "Dubai",
  ],
  authors: [{ name: "Nikhil Thapa", url: "https://nikhilthapa.vercel.app" }],
  creator: "Nikhil Thapa",
  openGraph: {
    title: "Nikhil Thapa — Full-Stack Developer",
    description,
    url: "https://nikhilthapa.vercel.app",
    siteName: "Nikhil Thapa",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Thapa — Full-Stack Developer",
    description,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#08070B",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${pixelifySans.variable} ${shantellSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
