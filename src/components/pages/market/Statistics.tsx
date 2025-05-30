import { StatisticCard } from "@/components/cards/StatisticCard";
import { FetchedAssetsResponse } from "@/types/fetchedAssetsResponse";
import { useMarketStatistics } from "@/hooks/useMarketStatistics";
import { MarketStatistic } from "@/types/marketStatistic";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";
import { ReactNode } from "react";
import styles from "@/assets/styles/components/pages/market/Statistics.module.css";

export const Statistics = ({
    assets,
    isLoading,
    error,
}: FetchedAssetsResponse): React.JSX.Element => {
    const statistics: MarketStatistic[] = useMarketStatistics(assets);

    let content: ReactNode;

    if (error) {
        content = (
            <p className="paragraph">
                Failed to fetch assets. Please try again in a few seconds.
            </p>
        );
    } else if (!isLoading && (!statistics || statistics.length === 0)) {
        content = <p className="paragraph">No statistics available.</p>;
    } else {
        content = statistics.map((stat) => (
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
        ));
    }

    return (
        <section
            className="container fullWidth"
            id="marketStatistics"
            aria-labelledby="marketStatisticsHeading"
        >
            <div className="container fullWidth borderBottom">
                <h1 className="heading" id="marketStatisticsHeading">
                    Market Statistics
                </h1>
            </div>
            <div className={styles.container}>{content}</div>
        </section>
    );
};
