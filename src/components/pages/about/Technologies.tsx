import styles from "@/assets/styles/components/pages/about/Technologies.module.css";

export const Technologies = ({
    isActive,
}: {
    isActive: boolean;
}): React.JSX.Element => {
    return (
        <section
            className={`container ${styles.container} ${
                isActive ? styles.active : ""
            }`}
        >
            <h2>Technologies</h2>
        </section>
    );
};
