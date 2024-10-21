"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { generateChartConfig } from "@/lib/generateChartConfig";

export function WaveChart({ chartData }: any) {
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
        <Card className="dark">
            <CardHeader>
                <CardTitle>Price history (USD)</CardTitle>
                <CardDescription>
                    Showing price for the last 6 months.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={true} />
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
            </CardContent>
        </Card>
    );
}
