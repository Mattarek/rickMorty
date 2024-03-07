import './App.css';

import { useState } from 'react';
import { Character } from './components/character/Character';
import { URLS } from './constant/api';
import { useFetch } from './components/api/useFetch';

function App() {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [isError, setIsError] = useState(false);

    useFetch(URLS.API_URI_CHARACTERS, setData, setIsPending, setIsError);

    return (
        <>
            {isPending ? (
                <div>Loading...</div>
            ) : isError ? (
                <div>Error occurred while fetching data.</div>
            ) : (
                data && (
                    <Character
                        data={data}
                        isPending={isPending}
                        isError={isError}
                    />
                )
            )}
        </>
    );
}

export default App;
