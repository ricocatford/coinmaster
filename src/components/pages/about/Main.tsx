import styles from "@/assets/styles/components/pages/about/Main.module.css";

export const Main = (): React.JSX.Element => {
    return (
        <section
            className="container"
            id="whatIsCoinmaster"
            role="region"
            aria-labelledby="whatIsCoinmasterHeading"
        >
            <div className={styles.container}>
                <h1 className={styles.heading} id="whatIsCoinmasterHeading">
                    What is Coinmaster?
                </h1>
                <p className={styles.paragraph}>
                    Coinmaster is a modern cryptocurrency analytics platform
                    that allows users to explore market data. Built for both
                    casual users and crypto enthusiasts, Coinmaster presents
                    clean, responsive charts and essential metrics to help users
                    stay informed.
                </p>
                <span className={styles.gradientLineOne}></span>
                <span className={styles.gradientLineTwo}></span>
            </div>
        </section>
    );
};
