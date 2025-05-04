import Asset from "./asset";

export default interface FetchedAssetResponse {
    asset: Asset | undefined;
    isLoading: boolean;
    error: string;
}