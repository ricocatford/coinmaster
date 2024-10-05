import { createJSONStorage, persist } from "zustand/middleware";
import { createStore } from "zustand/vanilla";

export type GlobalState = {
    test: string;
};

export type GlobalActions = {
    testStore: (string: string) => void;
};

export type GlobalStore = GlobalState & GlobalActions;

export const initGlobalStore = (): GlobalState => {
    return { test: "" };
};

export const defaultInitState: GlobalState = {
    test: "",
};

export const createGlobalStore = (initState: GlobalState = defaultInitState) => {
    return createStore<GlobalStore>()(
        persist(
            (set) => ({
                ...initState,
                testStore: (string: string) => console.log(string)
            }),
            {
                name: "global-storage",
                storage: createJSONStorage(() => localStorage)
            }
        )
    );
};