// TableData.tsx
import styles from "@/assets/styles/components/Table.module.css";
import Link from "next/link";

type TableDataProps = {
    label: string;
    value: string | number;
    isPriority?: boolean;
    isLink?: boolean;
    isChange?: boolean;
    linkHref?: string;
};

export const TableData = ({
    label,
    value,
    isPriority,
    isLink,
    isChange,
    linkHref,
}: TableDataProps) => {
    const changeStyle =
        typeof value === "string" && value.startsWith("-")
            ? styles.textRed
            : styles.textGreen;

    const content = isLink ? (
        <Link href={linkHref || "#"} className={styles.tableLink}>
            {value}
        </Link>
    ) : (
        <p>{value}</p>
    );

    return (
        <td
            className={`${styles.tableData} ${isChange ? changeStyle : ""} ${
                isPriority ? styles.priorityDataDisplay : ""
            }`}
        >
            <div className={styles.tableDataContainer}>{content}</div>
        </td>
    );
};
