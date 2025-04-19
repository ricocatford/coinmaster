"use client";

import styles from "@/assets/styles/components/Market.module.css";
import { Assets } from "./Assets";
import { Card } from "@/components/card/Card";
import { useFetchAllAssets } from "@/hooks/useFetchAllAssets";
import FetchedAssetsResponse from "@/types/fetchedAssetsResponse";
import { Statistics } from "./Statistics";

export default function Market(): React.JSX.Element {
    const { assets, error, isLoading }: FetchedAssetsResponse =
        useFetchAllAssets();

    return (
        <section className="container">
            <div className="container border-bottom">
                <h2 className="heading">Market Statistics</h2>
            </div>
            <div>
                <p className="paragraph">
                    Sponsored: Get all product features by signing up to our
                    Premium plan. <strong>Register now!</strong>
                </p>
            </div>
            <Statistics assets={assets} isLoading={isLoading} error={error} />
            <Assets assets={assets} isLoading={isLoading} error={error} />
        </section>
    );
}
