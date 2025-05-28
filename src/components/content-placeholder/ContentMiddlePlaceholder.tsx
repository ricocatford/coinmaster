import styles from "@/assets/styles/components/content-placeholder/ContentPlaceholder.module.css";
import { ReactNode } from "react";

type ContentMiddlePlaceholderProps = {
    children: ReactNode;
};

export const ContentMiddlePlaceholder = ({
    children,
}: ContentMiddlePlaceholderProps): React.JSX.Element => {
    return <div className={styles.middle}>{children}</div>;
};
