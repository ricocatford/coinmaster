import { AssetId } from "@/types/assetId"

export const formatAssetHistory = (assetId: AssetId, assetHistory: any) => {
    console.log("Asset history:", assetHistory)
    return {
        id: assetId,
        price: new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(assetHistory.priceUsd),
    }
}