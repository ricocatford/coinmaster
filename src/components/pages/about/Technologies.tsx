import styles from "@/assets/styles/components/pages/about/Technologies.module.css";

export const Technologies = (): React.JSX.Element => {
    return (
        <section
            className={styles.container}
            id="technologies"
            role="region"
            aria-labelledby="technologiesHeading"
        >
            <h2 className={styles.heading} id="featuresHeading">
                Technologies
            </h2>
            <dl className={styles.list}>
                <div className={styles.listItem}>
                    <dt className={styles.listLabel}>Next.js:</dt>
                    <dd className={styles.listDescription}>
                        For server-rendered React pages
                    </dd>
                </div>
                <div className={styles.listItem}>
                    <dt className={styles.listLabel}>TypeScript:</dt>
                    <dd className={styles.listDescription}>
                        for scalable and type-safe development
                    </dd>
                </div>
                <div className={styles.listItem}>
                    <dt className={styles.listLabel}>Custom CSS + Tailwind:</dt>
                    <dd className={styles.listDescription}>
                        for sleek, responsive styling
                    </dd>
                </div>
                <div className={styles.listItem}>
                    <dt className={styles.listLabel}>Recharts:</dt>
                    <dd className={styles.listDescription}>
                        for rendering price history
                    </dd>
                </div>
                <div className={styles.listItem}>
                    <dt className={styles.listLabel}>Coincap API:</dt>
                    <dd className={styles.listDescription}>
                        for rendering price history
                    </dd>
                </div>
            </dl>
        </section>
    );
};
