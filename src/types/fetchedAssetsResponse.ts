import { Asset } from "./asset";

export type FetchedAssetsResponse = {
    assets: Asset[] | undefined;
    isLoading: boolean;
    error: string;
}