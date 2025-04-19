import styles from "@/assets/styles/components/Card.module.css";
import {
    faGlobe,
    faArrowTrendDown,
    faArrowTrendUp,
    IconDefinition,
    faMoneyBillTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import MarketStat from "@/types/marketStat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconMap: Record<string, IconDefinition> = {
    globe: faGlobe,
    arrowTrendUp: faArrowTrendUp,
    arrowTrendDown: faArrowTrendDown,
    moneyBillTrendUp: faMoneyBillTrendUp,
};

export const Card = ({
    id,
    label,
    info,
    value,
    icon,
    asset,
}: MarketStat): React.JSX.Element => {
    return (
        <div className={styles.card} id={id}>
            <div>
                <FontAwesomeIcon icon={iconMap[icon]} className={styles.icon} />
            </div>
            <div>
                <h3 className={styles.label}>
                    {label}
                    <span> ({info})</span>
                </h3>
                {asset && <span className={styles.asset}>{asset}: </span>}
                <span
                    className={`${styles.value} ${
                        value?.startsWith("+") && styles.textGreen
                    } ${value?.startsWith("-") && styles.textRed}`}
                >
                    {value}
                </span>
            </div>
        </div>
    );
};
