import styles from "@/assets/styles/components/cards/InfoCard.module.css";

type InfoCardProps = {
    id: number;
    heading: string;
    paragraph?: string;
    list?: string[];
};

export const InfoCard = ({
    id,
    heading,
    paragraph,
    list,
}: InfoCardProps): React.JSX.Element => {
    return (
        <section className={styles.container} key={id}>
            <h2 className={styles.heading}>{heading}</h2>
            {paragraph && <p className={styles.paragraph}>{paragraph}</p>}
            {list && (
                <ul className={styles.list}>
                    {list.map((item) => (
                        <li className={styles.listItem} key={item}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};
