"use client";

import { GlobalStore } from "@/stores/GlobalStore";
import { Chart } from "./Chart";
import { Component } from "./Component";
import MarketStatistics from "./MarketStatistics";
import useGlobal from "@/hooks/global-store/useGlobal";

export const Market = () => {
    const { store }: { store: GlobalStore } = useGlobal();

    const testStore = () => {
        store?.testStore();
    };

    return (
        <div className="container" id="market">
            {/* <MarketStatistics /> */}
            <p>Store mode: {store?.mode ? "On" : "Off"}</p>
            <Chart />
            <Component />
            <button type="button" onClick={() => testStore()}>
                Click for test
            </button>
            <h2>Market Dominance</h2>
            <h2>Cryptocurrencies</h2>
        </div>
    );
};
