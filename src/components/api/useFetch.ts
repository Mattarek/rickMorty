import { useEffect, useState } from 'react';

export const useFetch = (url: string) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsPending(true);
            try {
                const response = await fetch(url);
                const result = await response.json();
                console.dir(result.results);
                setData(result);
            } catch (error) {
                console.error(error);
                setIsError(true);
            } finally {
                setIsPending(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, isPending, isError };
};
