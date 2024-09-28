import styles from "@/assets/styles/components/Hero.module.css";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
    return (
        <section
            id="home"
            className="container mx-auto py-2 h-[calc(100vh-86px)] flex items-center"
        >
            <div className="w-2/3">
                <h1 className="text-8xl uppercase mb-8 tracking-tighter">
                    Check & track{" "}
                    <span
                        className={`${styles.headingGradient} capitalize tracking-tight`}
                    >
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
            <div className="w-1/3">
                <div className={styles.backgroundGradient}></div>
            </div>
        </section>
    );
}
