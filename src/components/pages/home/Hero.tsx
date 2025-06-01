"use client";

import Link from "next/link";
import { Announcement } from "./Announcement";
import styles from "@/assets/styles/components/pages/home/Hero.module.css";
import buttonStyles from "@/assets/styles/components/buttons/GenericButton.module.css";

export const Hero = (): React.JSX.Element => {
    return (
        <section
            className={`container ${styles.container}`}
            id="hero"
            aria-labelledby="heroHeading"
        >
            <Announcement href="#">
                <span>
                    Introducir our
                    <span className={styles.highlight}> Tracker</span> feature!
                </span>
            </Announcement>
            <h1 className={styles.heading} id="heroHeading">
                Explore and Track Crypto Assets.
            </h1>
            <p className={styles.paragraph}>
                See the
                <span className={styles.highlight}> crypto </span>
                market clearly. CoinMaster gives you the
                <span className={styles.highlight}> tools </span>to navigate it
                with confidence.
            </p>
            <div className={styles.buttonsContainer}>
                <Link
                    href="/market"
                    className={`${buttonStyles.button} ${buttonStyles.buttonPrimary}`}
                >
                    Get started
                </Link>
                <Link
                    href="#features"
                    className={`${buttonStyles.button} ${buttonStyles.buttonSecondary}`}
                >
                    Learn more
                </Link>
            </div>
        </section>
    );
};
