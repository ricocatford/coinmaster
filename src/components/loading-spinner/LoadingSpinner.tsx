import styles from "@/assets/styles/components/LoadingSpinner.module.css";

export const LoadingSpinner = (): React.JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.loadingSpinner}></div>
        </div>
    );
};
