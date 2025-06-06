import styles from "@/assets/styles/components/content-placeholder/ContentPlaceholder.module.css";
import { ReactNode } from "react";

type ContentTopPlaceholderProps = {
    children: ReactNode;
};

export const ContentTopPlaceholder = ({
    children,
}: ContentTopPlaceholderProps): React.JSX.Element => {
    return <div className={styles.top}>{children}</div>;
};
