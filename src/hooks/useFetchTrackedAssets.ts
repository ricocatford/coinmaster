import { AssetId } from "@/types/assetId";
import { useFetchAssetById } from "./useFetchAssetById";

export const useFetchTrackedAssets = (assetIds: AssetId[]) => {
    return assetIds.map((assetId) => useFetchAssetById(assetId));
}