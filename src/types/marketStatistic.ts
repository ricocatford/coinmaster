import { AssetId } from "./assetId";


export type MarketStatistic = {
    id: string;
    label: string;
    info: string;
    value: string | null;
    asset?: string;
    assetId?: AssetId;
    icon: string;
}