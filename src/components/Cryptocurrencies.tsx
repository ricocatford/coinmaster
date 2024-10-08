"use client";

import formatAssets from "@/lib/formatAssets";
import useSWR from "swr";
import styles from "@/assets/styles/components/Cryptocurrencies.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Cryptocurrencies = () => {
    const { data, error, isLoading } = useSWR(
        "https://api.coincap.io/v2/assets",
        fetcher,
        {
            refreshInterval: 5000,
        }
    );

    if (error) return <p>Failed to fetch assets.</p>;

    if (isLoading) return <p>Loading assets...</p>;

    const assets = formatAssets(data.data);

    const styleChangePercent = (string: string) => {
        return string.startsWith("-") ? "text-red-600" : "text-lime-500";
    };

    return (
        <section className={styles.container}>
            <h2 className={styles.heading}>Cryptocurrencies</h2>
            <table className={styles.table}>
                <thead className={styles.tableHead}>
                    <tr className={styles.tableRow}>
                        <th></th>
                        <th className={styles.tableHeader}>#</th>
                        <th className={styles.tableHeader}>Name</th>
                        <th className={styles.tableHeader}>Price</th>
                        <th className={styles.tableHeader}>
                            Circulating Supply
                        </th>
                        <th className={styles.tableHeader}>Market Cap</th>
                        <th className={styles.tableHeader}>Volume (24h)</th>
                        <th className={styles.tableHeader}>24h %</th>
                    </tr>
                </thead>
                <tbody>
                    {assets.map((asset: any) => (
                        <tr key={asset.id} className={styles.tableRow}>
                            <td className={styles.tableData}>
                                <FontAwesomeIcon icon={faStar} />
                            </td>
                            <td className={styles.tableData}>{asset.rank}</td>
                            <td className={styles.tableData}>
                                {asset.name} ({asset.symbol})
                            </td>
                            <td className={styles.tableData}>{asset.price}</td>
                            <td className={styles.tableData}>{asset.supply}</td>
                            <td className={styles.tableData}>
                                {asset.marketCap}
                            </td>
                            <td className={styles.tableData}>
                                {asset.volume24Hr}
                            </td>
                            <td
                                className={`${
                                    styles.tableData
                                } ${styleChangePercent(
                                    asset.changePercent24Hr
                                )}`}
                            >
                                {asset.changePercent24Hr}%
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};
