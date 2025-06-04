import styles from "@/assets/styles/components/pages/about/Main.module.css";

export const Main = (): React.JSX.Element => {
    return (
        <section
            className={styles.container}
            id="whatIsCoinmaster"
            role="region"
            aria-labelledby="whatIsCoinmasterHeading"
        >
            <h1 className={styles.heading} id="whatIsCoinmasterHeading">
                What is CoinMaster?
            </h1>
            <p className={styles.paragraph}>
                CoinMaster is a modern cryptocurrency analytics platform that
                allows users to explore market data. Built for both casual users
                and crypto enthusiasts, CoinMaster presents clean, responsive
                charts and essential metrics to help users stay informed.
            </p>
        </section>
    );
};
