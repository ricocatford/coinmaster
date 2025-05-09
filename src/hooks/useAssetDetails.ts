import Asset from "@/types/asset";
import AssetDetail from "@/types/assetDetail";

export const useAssetDetails = (asset: Asset): AssetDetail[] => {
    const price: AssetDetail = {
        id: "price",
        label: "Price",
        value: asset.priceFormatted,
        valueShort: asset.priceShort,
        icon: "moneyBill"
    }

    const marketCap: AssetDetail = {
        id: "marketCap",
        label: "Market Cap",
        value: asset.marketCapFormatted,
        valueShort: asset.marketCapShort,
        icon: "globe"
    }

    const supply: AssetDetail = {
        id: "supply",
        label: "Supply",
        value: asset.supplyFormatted,
        valueShort: asset.supplyShort,
        icon: "cube"
    }

    const maxSupply: AssetDetail = {
        id: "maxSupply",
        label: "Max Supply",
        value: asset.maxSupplyFormatted,
        valueShort: asset.maxSupplyShort,
        icon: "cubes"
    }

    const volume24Hr: AssetDetail = {
        id: "volume24Hr",
        label: "Volume",
        info: "(24h)",
        value: asset.volume24HrFormatted,
        valueShort: asset.volume24HrShort,
        icon: "chartSimple"
    }

    const vwap24Hr: AssetDetail = {
        id: "vwap24Hr",
        label: "VWAP",
        info: "(24h)",
        value: asset.vwap24HrFormatted,
        valueShort: asset.vwap24HrShort,
        icon: "chartLine"
    }

    return [price, marketCap, supply, maxSupply, volume24Hr, vwap24Hr];
}