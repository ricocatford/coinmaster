import { Limit } from "@/hooks/useFetchAllAssets";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@/assets/styles/components/table/Table.module.css";

type TablePaginationProps = {
    limit: Limit;
    currentPage: number;
};

export const TablePagination = ({
    limit,
    currentPage,
}: TablePaginationProps) => {
    return (
        <div>
            <div>
                <span>Show number of assets:</span>
                <select>
                    <option value={10}>10</option>
                    <option value={10}>25</option>
                </select>
            </div>
            <div>
                <button>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <div>
                    <span>Page {currentPage}</span>
                </div>
                <button>
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
        </div>
    );
};
