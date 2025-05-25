import styles from "@/assets/styles/components/Table.module.css";
import headings from "@/assets/data/assetsTableHeadings.json";
import { TableHead } from "./TableHead";
import { TableHeadings } from "@/types/tableHeadings";
import { Asset } from "@/types/asset";
import { TableBody } from "./TableBody";

export const Table = ({ assets }: { assets: Asset[] }): React.JSX.Element => {
    return (
        <table className={styles.table}>
            <TableHead headings={headings as TableHeadings[]} />
            <TableBody assets={assets as Asset[]} />
        </table>
    );
};
