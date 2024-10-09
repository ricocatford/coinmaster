"use client";

import styles from "@/assets/styles/components/Cryptocurrencies.module.css";
import assetsHeadings from "@/assets/data/assetsHeadings.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDataFetch } from "@/hooks/useDataFetch";
import { Table } from "./Table";
import Assets from "@/types/assets";

export const Cryptocurrencies = () => {
    const { assets, error, isLoading } = useDataFetch();

    if (error) return <p>Failed to fetch assets.</p>;

    if (isLoading) return <p>Loading assets...</p>;

    return (
        <section className={styles.container}>
            <h2 className={styles.heading}>Cryptocurrencies</h2>
            <Table assets={assets} />
        </section>
    );
};
