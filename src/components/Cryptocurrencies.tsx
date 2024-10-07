"use client";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Cryptocurrencies = () => {
    const {
        data: assets,
        error,
        isLoading,
    } = useSWR("https://api.coincap.io/v2/assets", fetcher);

    console.log(assets);

    if (error) return <p>Failed to fetch assets.</p>;

    if (isLoading) return <p>Loading assets...</p>;

    return (
        <>
            <table>
                <tr>
                    <th>Rank #</th>
                    <th>Name</th>
                    <th>Symbol</th>
                </tr>
                {assets.data.map((asset: any) => (
                    <tr key={asset.id}>
                        <td>{asset.rank}</td>
                        <td>{asset.name}</td>
                        <td>{asset.symbol}</td>
                    </tr>
                ))}
            </table>
        </>
    );
};
