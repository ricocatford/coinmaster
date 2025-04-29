import styles from "@/assets/styles/components/Table.module.css";
import TableHeadings from "@/types/tableHeadings";

export const TableHead = ({
    headings,
}: {
    headings: TableHeadings[];
}): React.JSX.Element => {
    return (
        <thead className={styles.tableHead}>
            <tr className={styles.tableRow}>
                {headings.map((heading: TableHeadings) => (
                    <th
                        className={`${styles.tableHeading} ${
                            heading.isPriority ? styles.priorityDataDisplay : ""
                        }`}
                        key={heading.id}
                    >
                        {heading.text}
                    </th>
                ))}
            </tr>
        </thead>
    );
};
