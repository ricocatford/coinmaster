import { createJSONStorage, persist } from "zustand/middleware";
import { createStore } from "zustand/vanilla";
import { AssetId } from "../types/assetId";

export type Limit = 10 | 25 | 50 | 100;

type Pagination = {
    limit: Limit;
    currentPage: number;

}

export type GlobalState = {
    tracker: AssetId[];
    pagination: Pagination;
};



export type GlobalActions = {
    handleAsset: (assetId: AssetId) => void;
    setLimit: (newLimit: Limit) => void;
    setInitialPage: () => void;
    incrementPage: () => void;
    decrementPage: () => void;
};

export type GlobalStore = GlobalState & GlobalActions;

export const initGlobalStore = (): GlobalState => {
    return { tracker: [], pagination: { limit: 10, currentPage: 1 } };
};

export const defaultInitState: GlobalState = {
    tracker: [],
    pagination: { limit: 10, currentPage: 1 }
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
                },
                setLimit: (newLimit: Limit) => {
                    set((state) => {
                        if (state.pagination.limit !== newLimit) {
                            return {
                                ...state,
                                pagination: {
                                    ...state.pagination,
                                    limit: newLimit
                                }
                            };
                        }
                        return state;
                    })
                },
                setInitialPage: () => {
                    set((state) => {
                        return {
                            ...state,
                            pagination: { ...state.pagination, currentPage: 1 }
                        };
                    });
                },
                incrementPage: () => {
                    set((state) => {
                        const newPage: number = state.pagination.currentPage + 1;
                        return {
                            ...state,
                            pagination: { ...state.pagination, currentPage: newPage }
                        };
                    });
                },
                decrementPage: () => {
                    set((state) => {
                        const newPage: number = state.pagination.currentPage === 1 ? state.pagination.currentPage : state.pagination.currentPage - 1;
                        return {
                            ...state,
                            pagination: { ...state.pagination, currentPage: newPage }
                        }
                    })
                }
            }),
            {
                name: "global-storage",
                storage: createJSONStorage(() => localStorage)
            }
        )
    );
};