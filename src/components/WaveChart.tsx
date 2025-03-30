"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { generateChartConfig } from "@/lib/generateChartConfig";
import styles from "@/assets/styles/components/WaveChart.module.css";

export const WaveChart = ({ chartData }: any): React.JSX.Element => {
    const chartConfig = generateChartConfig(chartData);
    chartConfig satisfies ChartConfig;

    const dataKeys: string[] = [];
    for (const property in chartData[0]) {
        if (property !== "date") {
            dataKeys.push(property);
        }
    }

    const renderAreaComponent = () => {
        const colors = ["var(--turquoise)", "var(--orange)", "var(--purple)"];

        return dataKeys.map((dataKey, index) => (
            <Area
                dataKey={dataKey}
                type="natural"
                fill={colors[index % colors.length]}
                fillOpacity={0.4}
                stroke={colors[index % colors.length]}
                stackId={String.fromCharCode(97 + index)}
            />
        ));
    };

    return (
        <ChartContainer
            config={chartConfig}
            className={`dark ${styles.container}`}
        >
            <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 12,
                    right: 12,
                }}
            >
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 8)}
                />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" />}
                />
                {renderAreaComponent()}
            </AreaChart>
        </ChartContainer>
    );
};
