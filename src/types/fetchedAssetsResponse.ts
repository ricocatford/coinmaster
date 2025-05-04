import Asset from "./asset";

export default interface FetchedAssetsResponse {
    assets: Asset[] | undefined;
    isLoading: boolean;
    error: string;
}