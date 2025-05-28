import styles from "@/assets/styles/components/cards/FeatureCard.module.css";
import {
    faChartLine,
    faEye,
    IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

type FeatureCardProps = {
    id: number;
    image: string;
    icon: string;
    heading: string;
    paragraph: string;
    tags: string[];
};

const iconMap: Record<string, IconDefinition> = {
    chartLine: faChartLine,
    eye: faEye,
};

export const FeatureCard = ({
    id,
    image,
    icon,
    heading,
    paragraph,
    tags,
}: FeatureCardProps): React.JSX.Element => {
    return (
        <article className={styles.card}>
            <div
                className={`${styles.cardContainer} 
                    ${id % 2 !== 0 ? styles.cardContainerReverse : ""}
                `}
            >
                <div className={styles.imageContainer}>
                    <Image
                        src={`/assets/images/features/${image}`}
                        alt={heading}
                        width={539}
                        height={539}
                        className={styles.cardImage}
                        priority
                    />
                </div>
                <div className={styles.descriptionContainer}>
                    <div className={styles.cardIconContainer}>
                        <FontAwesomeIcon
                            icon={iconMap[icon]}
                            className={styles.cardIcon}
                        />
                    </div>
                    <h3 className={styles.cardHeading}>{heading}</h3>
                    <p className={styles.cardParagraph}>{paragraph}</p>
                    <ul className={styles.cardTagsList}>
                        {tags.map((tag) => (
                            <li className={styles.cardTag}>{tag}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </article>
    );
};
