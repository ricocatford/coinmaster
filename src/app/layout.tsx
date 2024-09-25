import type { Metadata } from "next";
import { Roboto, Josefin_Sans } from "next/font/google";
import "@/assets/styles/globals.css";
import Navbar from "@/components/layout/Navbar";

const roboto = Roboto({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-roboto",
});

const josefinSans = Josefin_Sans({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-josefin",
});

export const metadata: Metadata = {
    title: "CoinMaster",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${roboto.variable} ${josefinSans.variable} dark font-roboto antialiased`}
            >
                <header>
                    <Navbar />
                </header>
                {children}
            </body>
        </html>
    );
}
