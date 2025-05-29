"use client";

import { AssetsTable } from "@/components/pages/market/AssetsTable";
import { useFetchAllAssets } from "@/hooks/useFetchAllAssets";
import { FetchedAssetsResponse } from "@/types/fetchedAssetsResponse";
import { Statistics } from "@/components/pages/market/Statistics";

export default function Market(): React.JSX.Element {
    const { assets, error, isLoading }: FetchedAssetsResponse =
        useFetchAllAssets();

    return (
        <>
            <Statistics assets={assets} isLoading={isLoading} error={error} />
            <AssetsTable assets={assets} isLoading={isLoading} error={error} />
        </>
    );
}
