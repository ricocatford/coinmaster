import styles from "@/assets/styles/components/Table.module.css";
import { AddToTrackerButton } from "@/components/table/AddToTrackerButton";
import Asset from "@/types/asset";

export const TableBody = ({
    assets,
}: {
    assets: Asset[];
}): React.JSX.Element => {
    return (
        <tbody>
            {assets.map((asset: Asset) => (
                <tr key={asset.id} className={styles.tableRow}>
                    <td className={styles.tableData}>
                        <AddToTrackerButton id={asset.id} />
                    </td>
                    <td
                        className={`${styles.tableData} ${styles.tableDataLink}`}
                    >
                        {asset.name} ({asset.symbol})
                    </td>
                    <td className={styles.tableData}>{asset.price}</td>
                    <td className={styles.tableData}>{asset.supply}</td>
                    <td className={styles.tableData}>{asset.marketCap}</td>
                    <td className={styles.tableData}>{asset.volume24Hr}</td>
                    <td className={styles.tableData}>{asset.volume24Hr}</td>
                    <td
                        className={`${styles.tableData} ${
                            asset.changePercent24Hr.startsWith("-")
                                ? styles.textRed
                                : styles.textGreen
                        }`}
                    >
                        {asset.changePercent24Hr}%
                    </td>
                </tr>
            ))}
        </tbody>
    );
};
