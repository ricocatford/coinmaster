import { Limit } from "@/hooks/useFetchAllAssets";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@/assets/styles/components/table/Table.module.css";

type TablePaginationProps = {
    limit: Limit;
    currentPage: number;
    onLimitChange: (newLimit: Limit) => void;
    onPageChange: (direction: "up" | "down") => void;
};

export const TablePagination = ({
    limit,
    currentPage,
    onLimitChange,
    onPageChange,
}: TablePaginationProps) => {
    const limits: Limit[] = [10, 25, 50, 100];

    const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLimit = parseInt(event.target.value, 10) as Limit;
        onLimitChange(newLimit);
    };

    const handlePageChange = (direction: "up" | "down") => {
        onPageChange(direction);
    };

    const isDownButtonDisabled = currentPage === 1;

    return (
        <div className={styles.paginationContainer}>
            <div className={styles.limitContainer}>
                <span className={styles.limitText}>Show</span>
                <select
                    className={styles.limitSelect}
                    value={limit}
                    onChange={handleLimitChange}
                >
                    {limits.map((l) => (
                        <option key={l} value={l}>
                            {l}
                        </option>
                    ))}
                </select>
                <span className={styles.limitText}>assets.</span>
            </div>
            <div className={styles.pageContainer}>
                <button
                    onClick={() => handlePageChange("down")}
                    disabled={isDownButtonDisabled}
                >
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <div className={styles.pageTextContainer}>
                    <span className={styles.pageText}>Page {currentPage}</span>
                </div>
                <button onClick={() => handlePageChange("up")}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
        </div>
    );
};
