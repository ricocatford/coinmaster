import { AssetId } from "@/types/assetId"
import { fetchedAssetHistory } from "@/types/fetchedAssetHistory"
import { formatDateTime } from "./formatDateTime"

export const formatAssetHistory = (assetId: AssetId, assetHistory: fetchedAssetHistory[]) => (
    assetHistory.map((element: fetchedAssetHistory) => ({
        id: assetId,
        price: parseFloat(parseFloat(element.priceUsd).toFixed(2)),
        date: formatDateTime(element.date)
    }))
)