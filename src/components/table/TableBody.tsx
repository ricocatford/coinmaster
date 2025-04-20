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
                        <Link
                            href={`asset/${asset.id}`}
                            className={styles.tableLink}
                        >
                            {asset.name} ({asset.symbol})
                        </Link>
                    </td>
                    <td className={styles.tableData}>{asset.price}</td>
                    <td className={styles.tableData}>{asset.supply}</td>
                    <td className={styles.tableData}>
                        {asset.displayMarketCap}
                    </td>
                    <td className={styles.tableData}>
                        {asset.displayVolume24Hr}
                    </td>
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
