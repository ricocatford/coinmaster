import styles from "@/assets/styles/components/light-ray/LightRay.module.css";

export const LightRay = (): React.JSX.Element => {
    return (
        <div className={styles.rayContainer}>
            <div className={`${styles.lightRay} ${styles.rayOne}`}></div>
            <div className={`${styles.lightRay} ${styles.rayTwo}`}></div>
            <div className={`${styles.lightRay} ${styles.rayThree}`}></div>
            <div className={`${styles.lightRay} ${styles.rayFour}`}></div>
            <div className={`${styles.lightRay} ${styles.rayFive}`}></div>
        </div>
    );
};
