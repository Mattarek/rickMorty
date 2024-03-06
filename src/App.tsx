import './App.css';
import { useFetch } from './components/api/useFetch';
import { URLS } from './components/constant/api';
import { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsPending(true);
            try {
                const result = await useFetch(URLS.API_URI_CHARACTERS);
                setData(result);
            } catch (error) {
                console.error(error);
                setIsError(true);
            }
            setIsPending(false);
        };

        fetchData();
    }, []);

    if (isError) {
        return <div>Error occurred.</div>;
    }

    if (isPending) {
        return <div>Loading...</div>;
    }

    return <div>{data?.results?.map((element) => element.name)}</div>;
}

export default App;
