import { createJSONStorage, persist } from "zustand/middleware";
import { createStore } from "zustand/vanilla";

export type GlobalState = {
    assets: Asset[];
    mode: boolean;
};

export type Asset = {
    id: string;
    rank: string;
    symbol: string;
    name: string;
    supply: string;
    marketCapUsd: string;
    volumeUsd24Hr: string;
    priceUsd: string;
    changePercent24Hr: string;
    vwap24Hr: string;
}

export type GlobalActions = {
    testStore: () => void;
};

export type GlobalStore = GlobalState & GlobalActions;

export const initGlobalStore = (): GlobalState => {
    return { assets: [], mode: true };
};

export const defaultInitState: GlobalState = {
    assets: [],
    mode: true,
};

export const createGlobalStore = (initState: GlobalState = defaultInitState) => {
    return createStore<GlobalStore>()(
        persist(
            (set) => ({
                ...initState,
                testStore: () => set((state) => {
                    state.mode = !state.mode;
                    return { mode: state.mode }
                })
            }),
            {
                name: "global-storage",
                storage: createJSONStorage(() => localStorage)
            }
        )
    );
};