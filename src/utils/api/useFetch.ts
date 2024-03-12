import { useEffect, useState } from 'react';

export const useFetch = (
    url: string,
    pageNumber: number,
    onPressEnter: string,
) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [isError, setIsError] = useState(false);
    const [pageCount, setPageCount] = useState<number>(1);

    useEffect(() => {
        const fetchData = async () => {
            let apiUrl = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
            if (onPressEnter && onPressEnter !== '') {
                apiUrl += `&name=${onPressEnter}`;
            }
            setIsPending(true);
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setPageCount(data?.info.pages);
                setData(data);
                setIsPending(false);
            } catch (error) {
                setIsError(true);
                setIsPending(false);
                throw error;
            }
        };

        fetchData();
    }, [url, pageNumber, onPressEnter]);

    return { data, isPending, isError, pageCount };
};
