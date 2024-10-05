import styles from "@/assets/styles/components/MarketStatistics.module.css";

export default function MarketStatistics() {
    return (
        <section id="marketStatistics">
            <article className={styles.card}>
                <h3>$12837.2B</h3>
                <p>Volume Cap USD (24h)</p>
            </article>
        </section>
    );
}

