import Asset from "@/types/asset";
import AssetStatsResponse from "@/types/assetStatsResponse";
import { formatPercentage } from "./formatPercentage";

export const getTopGainerAsset = (assets: Asset[]): AssetStatsResponse => {
    const topGainer: number = Math.max(...assets.map((asset) => parseFloat(asset.changePercent24Hr)));

    const formattedPercentage: string = formatPercentage(topGainer.toString());

    const topGainerAsset: Asset | undefined = assets.find(
        (asset) => parseFloat(asset.changePercent24Hr) === topGainer
    );

    return {
        value: `+${formattedPercentage}%`,
        asset: topGainerAsset?.name,
        assetId: topGainerAsset?.id
    }
}