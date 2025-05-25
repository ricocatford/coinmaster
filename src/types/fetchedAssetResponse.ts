import { Asset } from "./asset";

export type FetchedAssetResponse = {
    asset: Asset | undefined;
    isLoading: boolean;
    error: string;
}