import styles from "@/assets/styles/components/content-placeholder/ContentPlaceholder.module.css";
import { ReactNode } from "react";

type ContentPlaceholderProps = {
    children: ReactNode;
};

export const ContentPlaceholder = ({
    children,
}: ContentPlaceholderProps): React.JSX.Element => {
    return <div className={styles.container}>{children}</div>;
};
