import styles from "@/assets/styles/components/Hero.module.css";
import Link from "next/link";

export const Hero = () => {
    return (
        <>
            <section className={`container ${styles.container}`}>
                <h1>
                    Check & track <span>Cryptocurrencies</span>
                </h1>
                <p>
                    In an ever changing market, you have to track for winning.
                    Coinmaster provides you with the best tools for tracking
                    cryptocurrencies and assist you with analytics.
                </p>
                <Link href="#">Get started</Link>
            </section>
        </>
    );
};
