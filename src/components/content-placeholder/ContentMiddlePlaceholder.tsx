import styles from "@/assets/styles/components/ContentPlaceholder.module.css";
import { ReactNode } from "react";

interface ContentMiddlePlaceholderProps {
    children: ReactNode;
}

export const ContentMiddlePlaceholder = ({
    children,
}: ContentMiddlePlaceholderProps): React.JSX.Element => {
    return <div className={styles.containerMiddle}>{children}</div>;
};
