import { Main } from "@/components/pages/about/Main";
import { InfoCard } from "@/components/cards/InfoCard";
import sections from "@/assets/data/aboutSections.json";
import styles from "@/assets/styles/components/pages/about/About.module.css";

export default function AboutPage(): React.JSX.Element {
    return (
        <div className={styles.container}>
            <Main />
            <div className={styles.infoContainer}>
                {sections.map((section) => (
                    <InfoCard {...section} key={section.id} />
                ))}
            </div>
        </div>
    );
}
