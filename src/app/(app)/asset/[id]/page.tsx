"use client";

import { useFetchAssetById } from "@/hooks/useFetchAssetById";
import { AssetDetails } from "@/components/pages/asset/AssetDetails";
import { FetchedAssetResponse } from "@/types/fetchedAssetResponse";
import { AssetPriceHistory } from "@/components/pages/asset/AssetPriceHistory";

export default function Asset({
    params,
}: {
    params: { id: string };
}): React.JSX.Element {
    const { asset, error, isLoading }: FetchedAssetResponse = useFetchAssetById(
        params.id
    );

    return (
        <>
            <AssetDetails asset={asset} isLoading={isLoading} error={error} />
            <AssetPriceHistory assetId={params.id} />
        </>
    );
}
