import { useEffect, useState } from 'react';

export const useFetch = (url: string) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [isError, setIsError] = useState(false);
    const [pageCount, setPageCount] = useState<number>(1);

    useEffect(() => {
        setIsPending(true);
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setPageCount(data?.info.pages);
                setData(data);
            } catch (error) {
                setIsError(true);
                throw error;
            }
        };

        fetchData();
        setIsPending(false);
    }, [url]);

    return { data, isPending, isError, pageCount };
};
