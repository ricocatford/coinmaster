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

type Props = {
    data: DataPoint[];
};

export const HistoryLineChart = ({ data }: Props) => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
                <XAxis
                    dataKey="date"
                    stroke="#8884d8"
                    tick={{ fill: "#ccc", fontSize: 10 }}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    domain={["dataMin", "dataMax"]}
                    stroke="#82ca9d"
                    tick={{ fill: "#ccc", fontSize: 10 }}
                    tickLine={false}
                    axisLine={false}
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
