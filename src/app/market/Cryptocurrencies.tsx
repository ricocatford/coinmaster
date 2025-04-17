"use client";

import styles from "@/assets/styles/components/Market.module.css";
import { Table } from "@/components/table/Table";
import { useFetchAllAssets } from "@/hooks/useFetchAllAssets";
import { TableTop } from "@/components/table/TableTop";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";

export const Cryptocurrencies = (): React.JSX.Element => {
    const { assets, error, isLoading } = useFetchAllAssets();

    if (error) return <p>Failed to fetch assets.</p>;
    if (isLoading) return <p>Loading assets...</p>;

    return (
        <div>
            <TableTop />
            <LoadingSpinner />
            {assets && <Table assets={assets} />}
        </div>
    );
};
