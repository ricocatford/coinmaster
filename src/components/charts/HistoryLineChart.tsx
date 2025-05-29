import {
    LineChart,
    Line,
    Tooltip,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from "recharts";
import { CustomTooltip } from "./CustomTooltip";

type DataPoint = {
    priceValue: number;
    price: string;
    priceShort: string;
    date: string;
};

type HistoryLineChartProps = {
    data: DataPoint[];
};

export const HistoryLineChart = ({ data }: HistoryLineChartProps) => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
                <XAxis
                    dataKey="date"
                    stroke="#ccc"
                    tick={{ fill: "#ccc", fontSize: 10 }}
                    tickLine={true}
                    axisLine={true}
                />
                <YAxis
                    domain={["dataMin", "dataMax"]}
                    stroke="#ccc"
                    tick={{ fill: "#ccc", fontSize: 10 }}
                    tickLine={true}
                    axisLine={true}
                />
                <Line
                    type="monotone"
                    dataKey="priceValue"
                    stroke="#fff"
                    strokeWidth={2}
                    dot={{ r: 1 }}
                    activeDot={{ r: 2 }}
                />
                <Tooltip cursor={false} content={<CustomTooltip />} />
            </LineChart>
        </ResponsiveContainer>
    );
};
