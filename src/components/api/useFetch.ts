import { useEffect } from 'react';

export const useFetch = (
    url: string,
    setData,
    setIsPending: (result: boolean) => void,
    setIsError: (result: boolean) => void,
) => {
    useEffect(() => {
        setIsPending(true);
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
            } catch (error) {
                setIsError(true);
                throw error;
            }
        };

        fetchData();
        setIsPending(false);
    }, [url]);
};
