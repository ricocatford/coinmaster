import styles from "@/assets/styles/components/Hero.module.css";
import Link from "next/link";

export const Hero = () => {
    return (
        <>
            <section className={`container ${styles.container}`}>
                <h1 className={styles.heading}>
                    Check & track{" "}
                    <span className={styles.headingGradient}>
                        Cryptocurrencies
                    </span>
                </h1>
                <p className={styles.paragraph}>
                    In an ever changing market, you have to track for winning.
                    Coinmaster provides you with the best tools for tracking
                    cryptocurrencies and assist you with analytics.
                </p>
                <div className={styles.buttonsContainer}>
                    <Link
                        href="#market"
                        className={`btn btn--primary ${styles.ctaButton}`}
                    >
                        Get started
                    </Link>
                    <Link href="#" className="btn btn--secondary">
                        Learn more
                    </Link>
                </div>
            </section>
        </>
    );
};
