"use client";

import { Cryptocurrencies } from "./Cryptocurrencies";
import { AssetHistory } from "./AssetHistory";

export const Market = (): React.JSX.Element => {
    return (
        <div className="container" id="market">
            <AssetHistory />
            <Cryptocurrencies />
        </div>
    );
};
