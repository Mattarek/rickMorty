import { useEffect } from 'react';
import { UseFetchProps } from '../../types/Api';

export const useFetch: UseFetchProps = (
    url,
    setData,
    setIsPending,
    setIsError,
) => {
    useEffect(() => {
        setIsPending(true);
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const { results } = await response.json();
                console.log(results);
                setData(results);
            } catch (error) {
                setIsError(true);
                throw error;
            }
        };

        fetchData();
        setIsPending(false);
    }, [url]);
};
