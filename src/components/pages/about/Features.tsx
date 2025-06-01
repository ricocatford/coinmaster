import styles from "@/assets/styles/components/pages/about/Features.module.css";

export const Features = ({
    isActive,
}: {
    isActive: boolean;
}): React.JSX.Element => {
    return (
        <section
            className={`container ${styles.container} ${
                isActive ? styles.active : ""
            }`}
            id="features"
            role="region"
            aria-labelledby="featuresHeading"
        >
            <h2 className={styles.heading} id="featuresHeading">
                Features
            </h2>
            <p className={styles.paragraph}>
                Coinmaster offers a range of features tailored to help users
                navigate the fast-paced world of cryptocurrency. From real-time
                market data to in-depth asset analysis, each feature is built
                with clarity, performance, and user experience in mind.
            </p>
            <p className={styles.paragraph}>
                Below you can find a full list of our currently available
                features:
            </p>
            <ul className={styles.list}>
                <li>Real-time data of all existing assets in the blockchain</li>
                <li>
                    Detailed asset pages with key metrics (market cap, volume,
                    supply, etc.)
                </li>
                <li>Interactive price history charts</li>
                <li>
                    Clean, responsive UI/UX (optimized for mobile, tablet, and
                    desktop)
                </li>
                <li>
                    Fast performance using Next.js and server-side rendering
                </li>
            </ul>
        </section>
    );
};
