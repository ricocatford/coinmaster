import styles from "@/assets/styles/components/pages/about/Features.module.css";

export const Features = (): React.JSX.Element => {
    return (
        <section
            className={styles.container}
            id="features"
            role="region"
            aria-labelledby="featuresHeading"
        >
            <h2 className={styles.heading} id="featuresHeading">
                Features
            </h2>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    Real-time data of all existing assets in the blockchain
                </li>
                <li>
                    Detailed asset pages with key metrics (market cap, volume,
                    supply, etc.)
                </li>
                <li className={styles.listItem}>
                    Interactive price history charts
                </li>
                <li className={styles.listItem}>
                    Clean, responsive UI/UX (optimized for mobile, tablet, and
                    desktop)
                </li>
                <li className={styles.listItem}>
                    Fast performance using Next.js and server-side rendering
                </li>
            </ul>
        </section>
    );
};
