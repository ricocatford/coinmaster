import styles from "@/assets/styles/components/Cards.module.css";
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

export const StatisticCard = ({
    id,
    label,
    info,
    value,
    icon,
    asset,
}: MarketStat): React.JSX.Element => {
    const changeStyle =
        typeof value === "string" && !value.startsWith("$")
            ? value.startsWith("-")
                ? styles.textRed
                : styles.textGreen
            : "";

    return (
        <div className={styles.statisticCard} id={id}>
            <div>
                <FontAwesomeIcon icon={iconMap[icon]} className={styles.icon} />
            </div>
            <div>
                <h3 className={styles.label}>
                    {label}
                    <span> ({info})</span>
                </h3>
                {asset && <span className={styles.asset}>{asset}: </span>}
                <span className={`${styles.value} ${changeStyle}`}>
                    {value}
                </span>
            </div>
        </div>
    );
};
