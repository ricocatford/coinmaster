import type { Metadata, Viewport } from "next";
import { Inter, Josefin_Sans } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import { GlobalStoreProvider } from "@/providers/GlobalStoreProvider";
import { Analytics } from "@vercel/analytics/next";
import "@/assets/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const inter = Inter({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const josefinSans = Josefin_Sans({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-josefin",
});

export const metadata: Metadata = {
    title: "CoinMaster",
    description:
        "Coinmaster is your ultimate crypto analytics platform — track the top 100 digital assets, monitor real-time market data, and stay ahead with powerful insights.",
    keywords: [
        "Coinmaster",
        "crypto analytics",
        "cryptocurrency tracker",
        "crypto market data",
        "digital assets",
        "crypto prices",
        "real-time crypto",
        "crypto insights",
        "top 100 cryptocurrencies",
    ],
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
    themeColor: "black",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${josefinSans.variable} font-inter antialiased`}
            >
                <GlobalStoreProvider>{children}</GlobalStoreProvider>
                <Analytics />
            </body>
        </html>
    );
}
