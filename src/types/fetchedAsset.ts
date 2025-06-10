import { AssetId } from "./assetId";

export type FetchedAsset = {
    id: AssetId;
    rank: string;
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