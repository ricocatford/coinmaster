import useStore from "@/stores/useStore";
import { GlobalStore } from "@/stores/GlobalStore";
import { useGlobalStore } from "@/providers/GlobalStoreProvider";

export default function useGlobal() {
    const store: GlobalStore = useStore<any, any>(
        useGlobalStore,
        (state) => state
    );
    return { store };
}
