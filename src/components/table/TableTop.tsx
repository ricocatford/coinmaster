import styles from "@/assets/styles/components/Table.module.css";

export const TableTop = (): React.JSX.Element => {
    return (
        <div className={styles.tableTop}>
            <span className={styles.tableTopHeading}>Latest market prices</span>
            <span className={styles.tableTopInfo}>
                (Showing top 100 assets)
            </span>
        </div>
    );
};
