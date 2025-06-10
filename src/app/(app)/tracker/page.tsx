"use client";

import { TrackerIntro } from "@/components/pages/tracker/TrackerIntro";
import { TrackerTable } from "@/components/pages/tracker/TrackerTable";
import { useGlobal } from "@/hooks/global-store/useGlobal";
import { GlobalStore } from "@/stores/GlobalStore";

export default function TrackerPage(): React.JSX.Element {
    const { store }: { store: GlobalStore } = useGlobal();
    const tracker = store?.tracker ?? [];

    return (
        <>
            <TrackerIntro />
            <TrackerTable tracker={tracker} />
        </>
    );
}
