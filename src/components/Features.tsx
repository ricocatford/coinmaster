import styles from "@/assets/styles/components/Features.module.css";

export const Features = (): React.JSX.Element => {
    return (
        <section className={`container ${styles.container}`}>
            <h2 className={styles.heading}>Product Features</h2>
            <p className={styles.paragraph}>
                CoinMaster offers a suite of tools to analyze and compare
                cryptocurrencies, helping you make informed decisions.
            </p>
            <div className={styles.features}>
                <div>
                    <h3>Feature One</h3>
                </div>
                <div>
                    <h3>Feature Two</h3>
                </div>
            </div>
        </section>
    );
};
