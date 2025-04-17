import type { Metadata } from "next";
import { Roboto as Manrope, Josefin_Sans } from "next/font/google";
import "@/assets/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Navbar } from "@/components/layout/navbar/Navbar";
import { Footer } from "@/components/layout/footer/Footer";
import { GlobalStoreProvider } from "@/providers/GlobalStoreProvider";

config.autoAddCss = false;

const manrope = Manrope({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-manrope",
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
                className={`${manrope.variable} ${josefinSans.variable} font-manrope antialiased`}
            >
                <GlobalStoreProvider>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </GlobalStoreProvider>
            </body>
        </html>
    );
}
