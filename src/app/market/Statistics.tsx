import { Card } from "@/components/card/Card";
import { useEffect } from "react";
import styles from "@/assets/styles/components/Market.module.css";
import FetchedAssetsResponse from "@/types/fetchedAssetsResponse";
import { useMarketStatistics } from "@/hooks/useMarketStatistics";
import MarketStatistics from "@/types/marketStatistics";

export const Statistics = ({
    assets,
    isLoading,
    error,
}: FetchedAssetsResponse): React.JSX.Element => {
    const statistics = useMarketStatistics(assets);
    useEffect(() => {
        console.log(statistics, typeof statistics);
    }, [statistics]);

    return (
        <div className={styles.statistics}>
            <Card>
                <p>Hello world</p>
            </Card>
            <Card>
                <p>Hello world</p>
            </Card>
            <Card>
                <p>Hello world</p>
            </Card>
            <Card>
                <p>Hello world</p>
            </Card>
        </div>
    );
};
