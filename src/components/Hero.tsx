import styles from "@/assets/styles/components/Hero.module.css";
import Link from "next/link";

export default function Hero() {
    return (
        <section
            id="home"
            className="container mx-auto py-2 h-screen flex items-center"
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
                <p className="text-xl max-w-4xl mb-12">
                    In an ever changing market, you have to track for winning.
                    Coinmaster provides you with the best tools for tracking
                    cryptocurrencies and assist you with analytics.
                </p>
                <Link href="#" className="py-4 px-8 bg-purple-300">
                    Start now
                </Link>
            </div>
            <div className="w-1/3">
                <p>Hello</p>
            </div>
        </section>
    );
}
