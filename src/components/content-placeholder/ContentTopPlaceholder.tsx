import styles from "@/assets/styles/components/ContentPlaceholder.module.css";
import { ReactNode } from "react";

interface ContentTopPlaceholderProps {
    children: ReactNode;
}

export const ContentTopPlaceholder = ({
    children,
}: ContentTopPlaceholderProps): React.JSX.Element => {
    return <div className={styles.containerTop}>{children}</div>;
};
