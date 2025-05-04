import styles from "@/assets/styles/components/Features.module.css";
import features from "@/assets/data/features.json";
import { FeatureCard } from "./cards/FeatureCard";

export const Features = (): React.JSX.Element => {
    return (
        <section className="container" id="features">
            <h2 className={styles.heading}>Product Features</h2>
            <p className={styles.paragraph}>
                CoinMaster offers a suite of tools to analyze and compare
                cryptocurrencies, helping you make informed decisions.
            </p>

            <div className={styles.features}>
                {features.map((feature) => (
                    <FeatureCard {...feature} key={feature.id} />
                ))}
            </div>
        </section>
    );
};
