import { StatisticCard } from "@/components/cards/StatisticCard";
import { FetchedAssetsResponse } from "@/types/fetchedAssetsResponse";
import { useMarketStatistics } from "@/hooks/useMarketStatistics";
import { MarketStatistic } from "@/types/marketStatistic";
import styles from "@/assets/styles/components/Statistics.module.css";

export const Statistics = ({
    assets,
    isLoading,
    error,
}: FetchedAssetsResponse): React.JSX.Element => {
    const statistics: MarketStatistic[] = useMarketStatistics(assets);

    if (error) {
        return (
            <div className={styles.container}>
                <p className="paragraph">
                    Failed to fetch assets. Please try again in a few seconds.
                </p>
            </div>
        );
    }

    if (!isLoading && (!statistics || statistics.length === 0)) {
        return (
            <div className={styles.container}>
                <p className="paragraph">No statistics available.</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            {statistics.map((stat) => (
                <StatisticCard
                    key={stat.id}
                    id={stat.id}
                    label={stat.label}
                    info={stat.info}
                    value={stat.value}
                    asset={stat.asset}
                    icon={stat.icon}
                    isLoading={isLoading}
                />
            ))}
        </div>
    );
};
