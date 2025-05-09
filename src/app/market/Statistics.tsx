import { StatisticCard } from "@/components/cards/StatisticCard";
import FetchedAssetsResponse from "@/types/fetchedAssetsResponse";
import { useMarketStatistics } from "@/hooks/useMarketStatistics";
import MarketStatistic from "@/types/marketStatistic";
import styles from "@/assets/styles/components/Market.module.css";
import { ContentMiddlePlaceholder } from "@/components/content-placeholder/ContentMiddlePlaceholder";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";

export const Statistics = ({
    assets,
    isLoading,
    error,
}: FetchedAssetsResponse): React.JSX.Element => {
    const statistics: MarketStatistic[] = useMarketStatistics(assets ?? []);

    return (
        <div className={styles.statistics}>
            {error && (
                <p className="paragraph">
                    Failed to fetch assets. Please try again in a few seconds.
                </p>
            )}
            {isLoading && (
                <ContentMiddlePlaceholder>
                    <LoadingSpinner />
                </ContentMiddlePlaceholder>
            )}
            {statistics &&
                statistics.map((stat) => (
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
