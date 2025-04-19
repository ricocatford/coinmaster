import Asset from "./asset";

export default interface FetchedAssetsResponse {
    assets: Asset[];
    isLoading: boolean;
    error: string;
}