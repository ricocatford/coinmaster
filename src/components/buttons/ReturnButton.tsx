import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import styles from "@/assets/styles/components/Buttons.module.css";

export const ReturnButton = (): React.JSX.Element => {
    const router = useRouter();

    return (
        <button onClick={() => router.back()} className={styles.returnBtn}>
            <FontAwesomeIcon icon={faArrowLeft} />
        </button>
    );
};
