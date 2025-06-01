import { Main } from "@/components/pages/about/Main";
import { Features } from "@/components/pages/about/Features";
import styles from "@/assets/styles/components/pages/about/About.module.css";
import { Technologies } from "@/components/pages/about/Technologies";

export default function AboutPage(): React.JSX.Element {
    return (
        <div className={styles.container}>
            <Main />
            <div className={styles.infoContainer}>
                <Features />
                <Technologies />
                <Technologies />
            </div>
        </div>
    );
}
