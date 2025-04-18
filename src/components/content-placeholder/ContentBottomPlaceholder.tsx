import styles from "@/assets/styles/components/ContentPlaceholder.module.css";
import { ReactNode } from "react";

interface ContentBottomPlaceholderProps {
    children: ReactNode;
}

export const ContentBottomPlaceholder = ({
    children,
}: ContentBottomPlaceholderProps): React.JSX.Element => {
    return <div className={styles.containerBottom}>{children}</div>;
};
