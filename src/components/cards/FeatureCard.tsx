import {
    faChartLine,
    faEye,
    faMagnifyingGlassChart,
    IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@/assets/styles/components/cards/FeatureCard.module.css";

type FeatureCardProps = {
    id: number;
    icon: string;
    heading: string;
    paragraph: string;
    tags: string[];
};

const iconMap: Record<string, IconDefinition> = {
    magnifyingGlassChart: faMagnifyingGlassChart,
    eye: faEye,
    chartLine: faChartLine,
};

export const FeatureCard = ({
    id,
    icon,
    heading,
    paragraph,
    tags,
}: FeatureCardProps): React.JSX.Element => {
    return (
        <article className={styles.container} key={id}>
            <FontAwesomeIcon icon={iconMap[icon]} className={styles.icon} />
            <h3 className={styles.heading}>{heading}</h3>
            <p className={styles.paragraph}>{paragraph}</p>
            <ul className={styles.list}>
                {tags.map((tag) => (
                    <li className={styles.tag} key={tag}>
                        {tag}
                    </li>
                ))}
            </ul>
            <span className={styles.gradientLineOne}></span>
            <span className={styles.gradientLineTwo}></span>
        </article>
    );
};
