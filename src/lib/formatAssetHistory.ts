import { AssetId } from "@/types/assetId"
import { FetchedAssetHistory } from "@/types/fetchedAssetHistory"
import { formatDateTime } from "./formatDateTime"

export const formatAssetHistory = (assetId: AssetId, assetHistory: FetchedAssetHistory[]) => (
    assetHistory.map((element: FetchedAssetHistory) => ({
        id: assetId,
        price: parseFloat(parseFloat(element.priceUsd).toFixed(2)),
        date: formatDateTime(element.date)
    }))
);