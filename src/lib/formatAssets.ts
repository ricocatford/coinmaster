export default function formatAssets(assetsData: any) {
    const assets = assetsData.map((asset: any) => ({
        rank: asset.rank,
        name: asset.name,
        symbol: asset.symbol,
        price: new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 1,
            notation: "compact",
            compactDisplay: "short",
        }).format(asset.priceUsd),
        supply: new Intl.NumberFormat("en-US", {
            maximumFractionDigits: 1,
            notation: "compact",
            compactDisplay: "short",
        }).format(asset.supply),
        marketCap: new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 1,
            notation: "compact",
            compactDisplay: "short",
        }).format(asset.marketCapUsd),
        volume24Hr: new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 1,
            notation: "compact",
            compactDisplay: "short",
        }).format(asset.volumeUsd24Hr),
        changePercent24Hr: new Intl.NumberFormat("en-US", {
            maximumFractionDigits: 2,
            notation: "compact",
            compactDisplay: "short",
        }).format(asset.changePercent24Hr),
    }));
    
    return assets;
}