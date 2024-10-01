import buttonStyles from "@/assets/styles/components/Button.module.css";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
    return (
        <section
            id="home"
            className="container mx-auto py-2 h-[calc(100vh-86px)] flex items-center overflow-hidden"
        >
            <div className="w-full">
                <h1 className="text-8xl max-w-4xl uppercase mb-8 tracking-tighter font-josefin">
                    Check & track{" "}
                    <span className="capitalize tracking-normal bg-gradient-to-r from-turquoise to-purple text-transparent bg-clip-text">
                        Cryptocurrencies
                    </span>
                </h1>
                <p className="text-xl max-w-4xl mb-12 sm:max-width">
                    In an ever changing market, you have to track for winning.
                    Coinmaster provides you with the best tools for tracking
                    cryptocurrencies and assist you with analytics.
                </p>
                <Link href="#">
                    <Button className="rounded-2xl px-12 text-sm leading-4 uppercase font-bold font-josefin">
                        Start now
                    </Button>
                </Link>
            </div>
        </section>
    );
}
