import { AssetId } from "./assetId";

export interface FetchedAsset {
    id: AssetId;
    symbol: string;
    name: string;
    priceUsd: string;
    supply: string;
    maxSupply: string;
    marketCapUsd: string;
    volumeUsd24Hr: string;
    changePercent24Hr: string;
    vwap24Hr: string;
}