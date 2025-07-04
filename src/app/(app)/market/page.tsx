"use client";

import { AssetsTable } from "@/components/pages/market/AssetsTable";
import { Statistics } from "@/components/pages/market/Statistics";

export default function MarketPage(): React.JSX.Element {
    return (
        <>
            <Statistics />
            <AssetsTable />
        </>
    );
}
