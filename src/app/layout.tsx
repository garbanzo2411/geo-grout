import type { Metadata } from 'next';
import { Anton, Oswald, Inter, IBM_Plex_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import { SITE } from "@/lib/constants";
import "./globals.css";

const anton = Anton({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-anton",
    display: "swap",
});

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-oswald",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const plexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["500", "600"],
    variable: "--font-plex-mono",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Geo Grout Ground Modification Specialist, Inc.",
    description: "Geotechnical contractors for 40 years."
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang = "en">
            <body
                className={`${anton.variable} ${oswald.variable} ${inter.variable} ${plexMono.variable}`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}