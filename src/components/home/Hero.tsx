"use client";

import styles from "@/assets/styles/components/Hero.module.css";
import Link from "next/link";
import { Announcement } from "./Announcement";
import { LightRay } from "../light-ray/LightRay";

export const Hero = (): React.JSX.Element => {
    return (
        <>
            <LightRay />
            <section className={`container ${styles.container}`}>
                <Announcement />
                <h1 className={styles.heading}>
                    Explore and Track Crypto Assets.
                </h1>
                <p className={styles.paragraph}>
                    See the <span className={styles.highlight}>crypto</span>{" "}
                    market clearly. CoinMaster gives you the{" "}
                    <span className={styles.highlight}>tools</span> to navigate
                    it with confidence.
                </p>
                <div className={styles.buttonsContainer}>
                    <Link
                        href="/market"
                        className={`btn btn--primary ${styles.ctaButton}`}
                    >
                        Get started
                    </Link>
                    <Link href="#features" className="btn btn--secondary">
                        Learn more
                    </Link>
                </div>
            </section>
        </>
    );
};
