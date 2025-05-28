import styles from "@/assets/styles/components/cards/DetailCard.module.css";
import { AssetDetail } from "@/types/assetDetail";
import {
    IconDefinition,
    faChartLine,
    faChartSimple,
    faCube,
    faCubes,
    faGlobe,
    faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconMap: Record<string, IconDefinition> = {
    moneyBill: faMoneyBill,
    globe: faGlobe,
    cube: faCube,
    cubes: faCubes,
    chartSimple: faChartSimple,
    chartLine: faChartLine,
};

export const DetailCard = ({
    id,
    label,
    info,
    value,
    valueShort,
    icon,
}: AssetDetail): React.JSX.Element => {
    return (
        <article
            className={styles.card}
            id={id}
            role="group"
            aria-labelledby={`${id}-label`}
            aria-describedby={`${id}-value ${id}-valueShort`}
        >
            <div className={styles.iconContainer}>
                <FontAwesomeIcon icon={iconMap[icon]} className={styles.icon} />
            </div>
            <dl>
                <dt className={styles.label} id={`${id}-label`}>
                    {label}
                    <span> {info}</span>
                </dt>
                <dd className={styles.value} id={`${id}-value`}>
                    {value}
                    <span className={styles.valueShort} id={`${id}-valueShort`}>
                        ({valueShort})
                    </span>
                </dd>
            </dl>
        </article>
    );
};
