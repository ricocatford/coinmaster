import styles from "@/assets/styles/components/Tracker.module.css";

export default function Page() {
    return (
        <section>
            <div className={styles.containerBackground}>
                <div className={styles.container}>
                    <h2>Tracker</h2>
                    <div className={styles.card}>
                        <h3>Bitcoin</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
