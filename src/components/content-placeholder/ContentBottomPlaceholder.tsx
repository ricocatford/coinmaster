import styles from "@/assets/styles/components/content-placeholder/ContentPlaceholder.module.css";
import { ReactNode } from "react";

type ContentBottomPlaceholderProps = {
    children: ReactNode;
};

export const ContentBottomPlaceholder = ({
    children,
}: ContentBottomPlaceholderProps): React.JSX.Element => {
    return <div className={styles.bottom}>{children}</div>;
};
