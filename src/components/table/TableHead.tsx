import { TableHeadings } from "@/types/tableHeadings";
import styles from "@/assets/styles/components/table/Table.module.css";

type TableHeadProps = {
    headings: TableHeadings[];
};

export const TableHead = ({ headings }: TableHeadProps): React.JSX.Element => {
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
