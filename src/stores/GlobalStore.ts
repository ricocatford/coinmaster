import { createJSONStorage, persist } from "zustand/middleware";
import { createStore } from "zustand/vanilla";
import { AssetId } from "../types/assetId";

export type GlobalState = {
    tracker: AssetId[];
};

export type GlobalActions = {
    handleAsset: (assetId: AssetId) => void;
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
                handleAsset: (assetId: AssetId) => {
                    let wasAdded: boolean = false;

                    set((state) => {
                        const exists = state.tracker.includes(assetId);
                        if (exists) {
                            return {
                                tracker: state.tracker.filter((a) => a !== assetId),
                            };
                        } else {
                            wasAdded = true;
                            return {
                                tracker: [...state.tracker, assetId],
                            };
                        }
                    });

                    return wasAdded;
                }
            }),
            {
                name: "global-storage",
                storage: createJSONStorage(() => localStorage)
            }
        )
    );
};