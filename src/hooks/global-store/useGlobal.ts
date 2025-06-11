// @/hooks/useGlobal.ts
"use client";

import { GlobalStore } from "@/stores/GlobalStore";
import { useGlobalStore } from "@/providers/GlobalStoreProvider";

export const useGlobal = () => {
    const store: GlobalStore = useGlobalStore((state: GlobalStore) => state);

    return { store };
};