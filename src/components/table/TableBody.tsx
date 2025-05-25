import { TableData } from "./TableData";
import { AddToTrackerButton } from "@/components/buttons/AddToTrackerButton";
import styles from "@/assets/styles/components/Table.module.css";
import { Asset } from "@/types/asset";

const columnsToRender = [
    { key: "name", isLink: true, isPriority: true },
    { key: "priceShort", isPriority: true },
    { key: "supplyShort" },
    { key: "marketCapShort" },
    { key: "volume24HrShort" },
    { key: "changePercent24HrFormatted", isChange: true },
];

export const TableBody = ({ assets }: { assets: Asset[] }) => {
    return (
        <tbody>
            {assets.map((asset) => (
                <tr key={asset.id} className={styles.tableRow}>
                    <td
                        className={`${styles.tableData} ${styles.priorityDataDisplay}`}
                    >
                        <AddToTrackerButton id={asset.id} />
                    </td>

                    {columnsToRender.map((col) => {
                        const value = (asset as any)[col.key];
                        const linkHref = col.isLink
                            ? `asset/${asset.id}`
                            : undefined;

                        return (
                            <TableData
                                key={col.key}
                                label={col.key}
                                value={value}
                                isPriority={col.isPriority}
                                isLink={col.isLink}
                                isChange={col.isChange}
                                linkHref={linkHref}
                            />
                        );
                    })}
                </tr>
            ))}
        </tbody>
    );
};
