import styles from "@/assets/styles/components/Cards.module.css";
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
        <div className={styles.detailCard} id={id}>
            <div>
                <FontAwesomeIcon icon={iconMap[icon]} className={styles.icon} />
            </div>
            <div>
                <h3 className={styles.label}>
                    {label}
                    <span> {info}</span>
                </h3>
                <span className={styles.value}>
                    {value}
                    <span className={styles.value}> ({valueShort})</span>
                </span>
            </div>
        </div>
    );
};
