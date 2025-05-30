import { Asset } from "@/types/asset";
import { FetchedAsset } from "@/types/fetchedAsset";
import { formatAsset } from "./formatAsset";

export const formatAllAssets = (assets: FetchedAsset[]): Asset[] => (
    Array.isArray(assets) ? assets.map((asset: FetchedAsset) => {
        return formatAsset(asset)
    }) : []
)