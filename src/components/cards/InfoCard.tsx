import Link from "next/link";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@/assets/styles/components/cards/InfoCard.module.css";

type InfoCardProps = {
    id: number;
    heading: string;
    paragraph?: string;
    list?: string[];
    link?: Link[];
};

type Link = {
    label: string;
    href: string;
};

export const InfoCard = ({
    id,
    heading,
    paragraph,
    list,
    link,
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
            {link && (
                <ul className={styles.list}>
                    {link.map((item) => (
                        <li className={styles.listItem} key={item.label}>
                            <Link
                                href={item.href}
                                target="_blank"
                                className={styles.link}
                            >
                                {item.label}
                                <FontAwesomeIcon
                                    icon={faUpRightFromSquare}
                                    className={styles.icon}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};
