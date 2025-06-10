import styles from "@/assets/styles/components/table/Table.module.css";
import headings from "@/assets/data/assetsTableHeadings.json";
import { TableHead } from "./TableHead";
import { TableHeadings } from "@/types/tableHeadings";
import { Asset } from "@/types/asset";
import { TableBody } from "./TableBody";
import { AssetId } from "@/types/assetId";

type TableProps = {
    assets: Asset[] | AssetId[];
    variant: "market" | "tracker";
};

export const Table = ({ assets, variant }: TableProps): React.JSX.Element => {
    return (
        <table className={styles.table}>
            <TableHead headings={headings as TableHeadings[]} />
            <TableBody assets={assets as Asset[] | AssetId[]} variant={variant} />
        </table>
    );
};
