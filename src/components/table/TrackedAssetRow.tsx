// components/pages/tracker/TrackedAssetRow.tsx
import { useFetchAssetById } from "@/hooks/useFetchAssetById";
import { TableData } from "@/components/table/TableData";
import { TrackerButton } from "@/components/buttons/TrackerButton";
import { AssetId } from "@/types/assetId";
import { Asset } from "@/types/asset";
import styles from "@/assets/styles/components/table/Table.module.css";
import { LoadingSpinner } from "../loading-spinner/LoadingSpinner";

type TrackedAssetRowProps = {
    assetId: AssetId;
};

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

export const TrackedAssetRow = ({
    assetId,
}: TrackedAssetRowProps): React.JSX.Element | null => {
    const { asset, isLoading, error } = useFetchAssetById(assetId);

    if (isLoading) {
        return (
            <tr className={styles.row}>
                <td className={styles.data}>
                    <LoadingSpinner />
                </td>
            </tr>
        );
    }

    if (error) {
        return (
            <tr className={styles.row}>
                <td
                    colSpan={columnsToRender.length + 1}
                    className={styles.data}
                >
                    Error loading asset {assetId}.
                </td>
            </tr>
        );
    }

    if (!asset) {
        return null;
    }

    return (
        <tr key={asset.id} className={styles.row}>
            <td className={`${styles.data} ${styles.priority} ${styles.fit}`}>
                <TrackerButton assetId={asset.id} />
            </td>

            {columnsToRender.map((col) => {
                const value = asset[col.key];
                const linkHref = col.isLink ? `asset/${asset.id}` : undefined;

                return (
                    <TableData
                        key={col.key}
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
    );
};
