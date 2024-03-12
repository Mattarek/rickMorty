import { useEffect, useState } from 'react';

export const useFetch = (url: string, pageNumber: number, name: string) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [isError, setIsError] = useState(false);
    const [pageCount, setPageCount] = useState<number>(1);

    useEffect(() => {
        const fetchData = async () => {
            setIsPending(true);

            let apiUrl = `${url}/?page=${pageNumber}`;

            if (name && name !== '') {
                if (apiUrl.includes('?')) {
                    apiUrl += `&name=${name}`;
                }
            }

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setPageCount(data?.info.pages);
                setData(data);
                setIsPending(false);
            } catch (error) {
                setIsError(true);
                throw error;
            } finally {
                setIsPending(false);
            }
        };

        fetchData();
    }, [url, pageNumber, name]);

    return { data, isPending, isError, pageCount };
};
