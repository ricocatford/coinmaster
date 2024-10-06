"use client";

import { useEffect } from "react";

export default function useFetchData() {
    useEffect(() => {
        const fetchData = async () => {
            const url = "https://api.coincap.io/v2/assets"
            const response = await fetch(url,
                {
                    method: "GET",
                    next: {
                        revalidate: 5,
                    }
                }
            );
            const data = await response.json();
            console.log("Data inside fetchData function", data)
        };
        fetchData();
    }, []);
}

// export default async function useFetchData() {
//     const fetchData = async () => {
//         const url = "https://api.coincap.io/v2/assets"
//         const response = await fetch(url,
//             {
//                 method: "GET",
//                 next: {
//                     revalidate: 5,
//                 }
//             }
//         );
//         const data = await response.json();
//         console.log("Data inside fetchData function", data)
//     };
//     fetchData();
// }