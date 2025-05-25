import { Asset } from "@/types/asset";
import { formatCurrencyShort } from "./formatCurrencyShort";
import { AssetStatsResponse } from "@/types/assetStatsResponse";

export const getMostTradedAsset = (assets: Asset[]): AssetStatsResponse => {
    const mostTradedVolume: number = Math.max(...assets.map((asset) => parseFloat(asset.volume24Hr)));

    const formattedVolume: string = formatCurrencyShort(mostTradedVolume.toString());

    const mostTradedAsset: Asset | undefined = assets.find(
        (asset) => parseFloat(asset.volume24Hr) === mostTradedVolume
    );

    return {
        value: formattedVolume,
        asset: mostTradedAsset?.name,
        assetId: mostTradedAsset?.id
    };
}