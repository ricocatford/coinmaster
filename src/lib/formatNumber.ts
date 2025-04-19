export const formatNumber = (value: string) =>
    new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 2,
    }).format(parseFloat(value));