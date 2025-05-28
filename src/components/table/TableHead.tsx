import styles from "@/assets/styles/components/table/Table.module.css";
import { TableHeadings } from "@/types/tableHeadings";

export const TableHead = ({
    headings,
}: {
    headings: TableHeadings[];
}): React.JSX.Element => {
    return (
        <thead className={styles.head}>
            <tr>
                {headings.map((heading: TableHeadings) => (
                    <th
                        className={`${styles.heading} ${
                            heading.isPriority ? styles.priority : ""
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
