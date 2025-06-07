"use client";

import { useFetchAssetById } from "@/hooks/useFetchAssetById";
import { AssetDetails } from "@/components/pages/asset/AssetDetails";
import { FetchedAssetResponse } from "@/types/fetchedAssetResponse";
import { AssetPriceHistory } from "@/components/pages/asset/AssetPriceHistory";
import { AssetActions } from "@/components/pages/asset/AssetActions";

export default function AssetPage({
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
            <AssetActions assetId={params.id} variant="bottom" />
        </>
    );
}
