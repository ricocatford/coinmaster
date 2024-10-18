export const formatAssetHistory = (assetId: any, assetHistory: any) => {
    console.log(assetHistory)
    return {
        id: assetId,
        price: new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(assetHistory.priceUsd),
        // date: assetHistory.date.toString()
    }
}