import { TableData } from "./TableData";
import { TrackerButton } from "@/components/buttons/TrackerButton";
import { Asset } from "@/types/asset";
import styles from "@/assets/styles/components/table/Table.module.css";
import { AssetId } from "@/types/assetId";
import { TrackedAssetRow } from "./TrackedAssetRow";

type ColumnConfig<T> = {
    key: keyof T;
    isPriority?: boolean;
    isFit?: boolean;
    isLink?: boolean;
    isChange?: boolean;
};

const columnsToRender: ColumnConfig<Asset>[] = [
    { key: "rank", isPriority: true, isFit: true },
    { key: "name", isLink: true, isPriority: true },
    { key: "priceShort", isPriority: true },
    { key: "supplyShort" },
    { key: "marketCapShort" },
    { key: "volume24HrShort" },
    { key: "changePercent24HrFormatted", isChange: true },
];

type TableBodyProps = {
    assets: Asset[] | AssetId[];
    variant: "market" | "tracker";
};

export const TableBody = ({ assets, variant }: TableBodyProps) => {
    return (
        <tbody>
            {variant === "market" &&
                (assets as Asset[])?.map((asset) => (
                    <tr key={asset.id} className={styles.row}>
                        <td
                            className={`${styles.data} ${styles.priority} ${styles.fit}`}
                        >
                            <TrackerButton assetId={asset.id} />
                        </td>

                        {columnsToRender.map((col) => {
                            const value = asset[col.key];
                            const linkHref = col.isLink
                                ? `asset/${asset.id}`
                                : undefined;

                            return (
                                <TableData
                                    key={col.key as string}
                                    value={value}
                                    isFit={col.isFit}
                                    isPriority={col.isPriority}
                                    isLink={col.isLink}
                                    isChange={col.isChange}
                                    linkHref={linkHref}
                                />
                            );
                        })}
                    </tr>
                ))}
            {variant === "tracker" &&
                (assets as AssetId[]).map((assetId) => (
                    <TrackedAssetRow key={assetId} assetId={assetId} />
                ))}
        </tbody>
    );
};
