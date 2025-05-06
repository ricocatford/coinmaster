import { StatisticCard } from "@/components/cards/StatisticCard";
import FetchedAssetsResponse from "@/types/fetchedAssetsResponse";
import { useMarketStatistics } from "@/hooks/useMarketStatistics";
import MarketStatistics from "@/types/marketStatistics";
import styles from "@/assets/styles/components/Market.module.css";

export const Statistics = ({
    assets,
    isLoading,
    error,
}: FetchedAssetsResponse): React.JSX.Element => {
    const statistics: MarketStatistics = useMarketStatistics(assets ?? []);

    return (
        <div className={styles.statistics}>
            {statistics?.data &&
                statistics.data.map((stat) => (
                    <StatisticCard
                        key={stat.id}
                        id={stat.id}
                        label={stat.label}
                        info={stat.info}
                        value={stat.value}
                        asset={stat.asset}
                        icon={stat.icon}
                    />
                ))}
        </div>
    );
};
