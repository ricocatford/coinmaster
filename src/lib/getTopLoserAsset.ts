import Asset from "@/types/asset";
import AssetStatsResponse from "@/types/assetStatsResponse";
import { formatPercentage } from "./formatPercentage";

export const getTopLoserAsset = (assets: Asset[]): AssetStatsResponse => {
    const topLoser: number = Math.min(...assets.map((asset) => parseFloat(asset.changePercent24Hr)));

    const formattedPercentage: string = formatPercentage(topLoser.toString());

    const topLoserAsset: Asset | undefined = assets.find(
        (asset) => parseFloat(asset.changePercent24Hr) === topLoser
    );

    return {
        value: `${formattedPercentage}%`,
        asset: topLoserAsset?.name,
        assetId: topLoserAsset?.id
    }
}