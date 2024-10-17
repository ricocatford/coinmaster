"use client";

import styles from "@/assets/styles/components/Cryptocurrencies.module.css";
import { Table } from "./Table";
import { useFetchAllAssets } from "@/hooks/useFetchAllAssets";
import Asset from "@/types/asset";

export const Cryptocurrencies = (): React.JSX.Element => {
    const {
        assets,
        error,
        isLoading,
    }: { assets?: Asset[]; error: any; isLoading: boolean } =
        useFetchAllAssets();

    if (error) return <p>Failed to fetch assets.</p>;
    if (isLoading) return <p>Loading assets...</p>;

    return (
        <>
            <section className={styles.container}>
                <h2 className={styles.heading}>Cryptocurrencies</h2>
                {assets && <Table assets={assets} />}
            </section>
        </>
    );
};
