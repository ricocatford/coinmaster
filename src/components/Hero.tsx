"use client";

import styles from "@/assets/styles/components/Hero.module.css";
import Link from "next/link";
import { GlobalStore } from "@/stores/GlobalStore";
import { useGlobal } from "@/hooks/global-store/useGlobal";

export const Hero = (): React.JSX.Element => {
    const { store }: { store: GlobalStore } = useGlobal();

    return (
        <>
            <section className={`container full-height ${styles.container}`}>
                <h1 className={styles.heading}>
                    Track & Compare{" "}
                    <span className={styles.headingGradient}>
                        Cryptocurrencies
                    </span>
                </h1>
                <p className={styles.paragraph}>
                    Gain a comprehensive view of the crypto landscape. From
                    detailed coin tables to insightful comparison charts,
                    CoinMaster equips you with the tools to navigate the market
                    with confidence.
                </p>
                <div className={styles.buttonsContainer}>
                    <Link
                        href="/market"
                        className={`btn btn--primary ${styles.ctaButton}`}
                    >
                        Get started
                    </Link>
                    <Link
                        href="#"
                        className="btn btn--secondary"
                        onClick={() => store.resetTracker()}
                    >
                        Reset tracker
                    </Link>
                </div>
            </section>
        </>
    );
};
