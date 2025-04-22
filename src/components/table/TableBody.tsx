import styles from "@/assets/styles/components/Table.module.css";
import { AddToTrackerButton } from "@/components/table/AddToTrackerButton";
import Asset from "@/types/asset";
import Link from "next/link";

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
                    <td className={styles.tableData}>
                        <div className={styles.tableDataContainer}>
                            <Link
                                href={`asset/${asset.id}`}
                                className={styles.tableLink}
                            >
                                {asset.name} ({asset.symbol})
                            </Link>
                        </div>
                    </td>
                    <td className={styles.tableData}>
                        <div className={styles.tableDataContainer}>
                            <p>{asset.price}</p>
                            <p>{asset.price}</p>
                        </div>
                    </td>
                    <td className={styles.tableData}>
                        <div className={styles.tableDataContainer}>
                            <p>{asset.supply}</p>
                        </div>
                    </td>
                    <td className={styles.tableData}>
                        <div className={styles.tableDataContainer}>
                            <p>{asset.displayMarketCap}</p>
                        </div>
                    </td>
                    <td className={styles.tableData}>
                        <div className={styles.tableDataContainer}>
                            <p>{asset.displayVolume24Hr}</p>
                        </div>
                    </td>
                    <td
                        className={`${styles.tableData} ${
                            asset.changePercent24Hr.startsWith("-")
                                ? styles.textRed
                                : styles.textGreen
                        }`}
                    >
                        <div className={styles.tableDataContainer}>
                            <p>{asset.changePercent24Hr}%</p>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    );
};
