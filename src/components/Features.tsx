import styles from "@/assets/styles/components/Features.module.css";
import features from "@/assets/data/features.json";
import { FeatureCard } from "./cards/FeatureCard";

export const Features = (): React.JSX.Element => {
    return (
        <section className={`container ${styles.container}`} id="features">
            <h2 className={styles.heading}>Simple tools. Powerful results.</h2>
            <p className={styles.paragraph}>
                Everything you need to understand the crypto market—fast.
            </p>
            <div className={styles.features}>
                {features.map((feature) => (
                    <FeatureCard {...feature} key={feature.id} />
                ))}
            </div>
        </section>
    );
};
