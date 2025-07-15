import {
    faAnglesLeft,
    faAngleLeft,
    faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalStore, Limit } from "@/stores/GlobalStore";
import { useGlobal } from "@/hooks/global-store/useGlobal";
import styles from "@/assets/styles/components/table/Table.module.css";

export const TablePagination = () => {
    const { store }: { store: GlobalStore } = useGlobal();
    const limit: Limit = store?.pagination.limit;
    const currentPage: number = store?.pagination.currentPage;

    const limits: Limit[] = [10, 25, 50, 100];

    const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLimit = parseInt(event.target.value, 10) as Limit;
        store.setLimit(newLimit);
    };

    const isButtonDisabled = currentPage === 1;

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
                    onClick={() => store.setInitialPage()}
                    disabled={isButtonDisabled}
                    className={styles.pageButton}
                >
                    <FontAwesomeIcon icon={faAnglesLeft} />
                </button>
                <button
                    onClick={() => store.decrementPage()}
                    disabled={isButtonDisabled}
                    className={styles.pageButton}
                >
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <div className={styles.pageTextContainer}>
                    <span className={styles.pageText}>Page {currentPage}</span>
                </div>
                <button
                    onClick={() => store.incrementPage()}
                    className={styles.pageButton}
                >
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
        </div>
    );
};
