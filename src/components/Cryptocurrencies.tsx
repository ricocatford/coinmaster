"use client";

import styles from "@/assets/styles/components/Market.module.css";
import { Table } from "./Table";
import { useFetchAllAssets } from "@/hooks/useFetchAllAssets";

export const Cryptocurrencies = (): React.JSX.Element => {
    const { assets, error, isLoading } = useFetchAllAssets();

    if (error) return <p>Failed to fetch assets.</p>;
    if (isLoading) return <p>Loading assets...</p>;

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Cryptocurrencies</h2>
            {assets && <Table assets={assets} />}
        </div>
    );
};
