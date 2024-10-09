import styles from "@/assets/styles/components/Cryptocurrencies.module.css";
import assetsHeadings from "@/assets/data/assetsHeadings.json";
import Asset from "@/types/asset";
import { AddToTrackerButton } from "./AddToTrackerButton";

export const Table = ({ assets }: { assets: Asset[] }): React.JSX.Element => {
    return (
        <table className={styles.table}>
            <thead className={styles.tableHead}>
                <tr className={styles.tableRow}>
                    {assetsHeadings.map((heading) => (
                        <th className={styles.tableHeading} key={heading.id}>
                            {heading.text}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {assets.map((asset: Asset) => (
                    <tr key={asset.id} className={styles.tableRow}>
                        <td className={styles.tableData}>
                            <AddToTrackerButton id={asset.id} />
                        </td>
                        <td className={styles.tableData}>{asset.rank}</td>
                        <td className={styles.tableData}>
                            {asset.name} ({asset.symbol})
                        </td>
                        <td className={styles.tableData}>{asset.price}</td>
                        <td className={styles.tableData}>{asset.supply}</td>
                        <td className={styles.tableData}>{asset.marketCap}</td>
                        <td className={styles.tableData}>{asset.volume24Hr}</td>
                        <td
                            className={`${styles.tableData} ${
                                asset.changePercent24Hr.startsWith("-")
                                    ? styles.colorRed
                                    : styles.colorGreen
                            }`}
                        >
                            {asset.changePercent24Hr}%
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
