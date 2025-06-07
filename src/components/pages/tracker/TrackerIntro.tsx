import styles from "@/assets/styles/components/pages/tracker/Tracker.module.css";

export const TrackerIntro = (): React.JSX.Element => {
    return (
        <section
            className="container fullWidth"
            id="assetsTracker"
            aria-labelledby="assetsTrackerHeading"
        >
            <div className="container fullWidth borderBottom">
                <h1 className="heading" id="assetsTrackerHeading">
                    Assets Tracker
                </h1>
            </div>
            <div className={styles.container}>
                <p className={styles.info}>
                    Track and monitor the performance of your selected
                    cryptocurrencies in one place. Add assets to your personal
                    tracker to keep an eye on price changes, volume, and market
                    trends over time.
                </p>
            </div>
        </section>
    );
};
