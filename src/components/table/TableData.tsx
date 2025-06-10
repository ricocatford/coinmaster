import styles from "@/assets/styles/components/table/Table.module.css";
import Link from "next/link";

type TableDataProps = {
    value: string | number;
    isFit?: boolean;
    isPriority?: boolean;
    isLink?: boolean;
    isChange?: boolean;
    linkHref?: string;
};

export const TableData = ({
    value,
    isFit,
    isPriority,
    isLink,
    isChange,
    linkHref,
}: TableDataProps) => {
    const changeStyle =
        typeof value === "string" && value.startsWith("-")
            ? "negativeValue"
            : "positiveValue";

    const content = isLink ? (
        <Link href={linkHref || "#"} className={styles.link}>
            {value}
        </Link>
    ) : (
        <p>{value}</p>
    );

    return (
        <td
            className={`${styles.data} ${isChange ? changeStyle : ""} ${
                isPriority ? styles.priority : ""
            } ${isFit ? styles.fit : ""}`}
        >
            <div className={styles.dataContainer}>{content}</div>
        </td>
    );
};
