import styles from "@/assets/styles/components/Cards.module.css";
import MarketStatistic from "@/types/marketStatistic";
import {
    IconDefinition,
    faGlobe,
    faArrowTrendDown,
    faArrowTrendUp,
    faMoneyBillTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoadingSpinner } from "../loading-spinner/LoadingSpinner";

const iconMap: Record<string, IconDefinition> = {
    globe: faGlobe,
    arrowTrendUp: faArrowTrendUp,
    arrowTrendDown: faArrowTrendDown,
    moneyBillTrendUp: faMoneyBillTrendUp,
};

type StatisticCardProps = {
    id: string;
    label: string;
    info: string;
    value: string | null;
    icon: string;
    asset?: string;
    isLoading: boolean;
};

export const StatisticCard = ({
    id,
    label,
    info,
    value,
    icon,
    asset,
    isLoading,
}: StatisticCardProps): React.JSX.Element => {
    const changeStyle =
        typeof value === "string" && !value.startsWith("$")
            ? value.startsWith("-")
                ? styles.textRed
                : styles.textGreen
            : "";

    return (
        <div className={styles.statisticCard} id={id}>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <div>
                        <FontAwesomeIcon
                            icon={iconMap[icon]}
                            className={styles.icon}
                        />
                    </div>
                    <div>
                        <h3 className={styles.label}>
                            {label}
                            <span> {info}</span>
                        </h3>
                        {asset && (
                            <span className={styles.asset}>{asset}: </span>
                        )}
                        <span className={`${styles.value} ${changeStyle}`}>
                            {value}
                        </span>
                    </div>
                </>
            )}
        </div>
    );
};
