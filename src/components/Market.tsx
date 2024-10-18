"use client";

import { useFetchAssetHistoryById } from "@/hooks/useFetchAssetHistoryById";
import { Cryptocurrencies } from "./Cryptocurrencies";

export const Market = (): React.JSX.Element => {
    const { assetHistory, error, isLoading } =
        useFetchAssetHistoryById("bitcoin");

    return (
        <div className="container" id="market">
            <Cryptocurrencies />
        </div>
    );
};
