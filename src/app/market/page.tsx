"use client";

import styles from "@/assets/styles/components/Market.module.css";
import { BannerCard } from "../../components/banner-card/BannerCard";
import { Cryptocurrencies } from "./Cryptocurrencies";
import { BannerHeading } from "@/components/banner-card/BannerHeading";
import { BannerParagraph } from "@/components/banner-card/BannerParagraph";

export default function Market(): React.JSX.Element {
    return (
        <div className="container">
            <div className={styles.topBanner}>
                <BannerCard>
                    <BannerHeading>
                        Start tracking your favourites!
                    </BannerHeading>
                    <BannerParagraph>
                        Use our tracker for spotting the best next movement on
                        your trades.
                    </BannerParagraph>
                </BannerCard>
                <div className={styles.whatever}>Whatever</div>
            </div>
            <Cryptocurrencies />
        </div>
    );
}
