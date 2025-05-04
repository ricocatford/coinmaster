import styles from "@/assets/styles/components/ContentPlaceholder.module.css";
import { ReactNode } from "react";

interface ContentPlaceholderProps {
    children: ReactNode;
}

export const ContentPlaceholder = ({
    children,
}: ContentPlaceholderProps): React.JSX.Element => {
    return <div className={styles.container}>{children}</div>;
};
