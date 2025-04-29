// TableBody.tsx
import { TableData } from "./TableData";
import { AddToTrackerButton } from "@/components/table/AddToTrackerButton";
import styles from "@/assets/styles/components/Table.module.css";
import Asset from "@/types/asset";

const columnsToRender = [
    { key: "name", isLink: true, isPriority: true },
    { key: "price", isPriority: true },
    { key: "supply" },
    { key: "displayMarketCap" },
    { key: "displayVolume24Hr" },
    { key: "changePercent24Hr", isChange: true },
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
