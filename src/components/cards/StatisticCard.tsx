import styles from "@/assets/styles/components/cards/StatisticCard.module.css";
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
                ? "negativeValue"
                : "positiveValue"
            : "";

    return (
        <article
            className={styles.card}
            id={id}
            role="group"
            aria-labelledby={`${id}-label`}
            aria-describedby={`${id}-value ${asset ? `${id}-asset` : ""}`}
        >
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <div className={styles.iconContainer}>
                        <FontAwesomeIcon
                            icon={iconMap[icon]}
                            className={styles.icon}
                        />
                    </div>
                    <dl>
                        <dt className={styles.label} id={`${id}-label`}>
                            {label}
                            <span> {info}</span>
                        </dt>
                        {asset && (
                            <dd className={styles.asset} id={`${id}-asset`}>
                                {asset}
                            </dd>
                        )}
                        <dd
                            className={`${styles.value} ${changeStyle}`}
                            id={`${id}-value`}
                        >
                            {value}
                        </dd>
                    </dl>
                </>
            )}
        </article>
    );
};
