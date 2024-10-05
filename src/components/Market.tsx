"use client";

import { GlobalStore } from "@/stores/GlobalStore";
import { Chart } from "./Chart";
import { Component } from "./Component";
import MarketStatistics from "./MarketStatistics";
import useGlobal from "@/hooks/global-store/useGlobal";

export const Market = () => {
    const { store }: { store: GlobalStore } = useGlobal();

    if (store) {
        store.testStore("Hello!");
    }

    return (
        <div className="container" id="market">
            {/* <MarketStatistics /> */}
            <Chart />
            <Component />
            <h2>Market Dominance</h2>
            <h2>Cryptocurrencies</h2>
        </div>
    );
};
