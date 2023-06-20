"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
export default function Dashboard() {
    // const [data, setData] = useState([]);
    // const [err, setErr] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     const getData = async () => {
    //         setIsLoading(true);
    //         const res = await fetch(
    //             "https://jsonplaceholder.typicode.com/posts",
    //             {
    //                 cache: "no-store",
    //             }
    //         );
    //         if (!res.ok) {
    //             setErr(true);
    //         }
    //         const data = await res.json();
    //         setData(data);
    //         console.log(data);
    //         setIsLoading(false);
    //     };
    //     getData();
    // }, []);

    //NEW WAY TO FETCH DATA
    const fetcher: (...args: any[]) => Promise<any> = (...args) =>
        fetch(...args).then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        `https://jsonplaceholder.typicode.com/posts`,
        fetcher
    );
    console.log(data);

    return <div>Dashboard</div>;
}
