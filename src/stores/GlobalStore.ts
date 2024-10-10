import { createJSONStorage, persist } from "zustand/middleware";
import { createStore } from "zustand/vanilla";
import { AssetId } from "../types/assetId";

export type GlobalState = {
    tracker: AssetId[];
};

export type GlobalActions = {
    trackAsset: (assetId: AssetId) => void;
    resetTracker: () => void;
};

export type GlobalStore = GlobalState & GlobalActions;

export const initGlobalStore = (): GlobalState => {
    return { tracker: [] };
};

export const defaultInitState: GlobalState = {
    tracker: []
};

export const createGlobalStore = (initState: GlobalState = defaultInitState) => {
    return createStore<GlobalStore>()(
        persist(
            (set) => ({
                ...initState,
                trackAsset: (assetId: AssetId) => set((state) => {
                    // const existingAssetId: number = state.tracker.findIndex((existingAsset) => existingAsset.id === assetId);
                    return { tracker: [...state.tracker, assetId] }
                }),
                resetTracker: () => set(() => {
                    return { tracker: [] }
                })
            }),
            {
                name: "global-storage",
                storage: createJSONStorage(() => localStorage)
            }
        )
    );
};