export const generateChartConfig = (chartData: any) => {
    const formatChartConfigLabel = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).replace(/-/g, " ");
    }

    const keys: string[] = Object.keys(chartData[0]).filter((key) => key !== "date");
    const chartConfig = {};
    keys.forEach((key, index) => {
        Object.defineProperty(chartConfig, key, {
            value: {
                label: formatChartConfigLabel(key),
                color: `hsl(var(--chart-${index + 1}))`
            }
        })
    })

    return chartConfig;
}