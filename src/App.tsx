import './App.css';

import { useState } from 'react';
import { useFetch } from './components/api/useFetch';
import { Character } from './components/character/Character';
import { URLS } from './constant/api';

function App() {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [isError, setIsError] = useState(false);

    useFetch(URLS.API_URI_CHARACTERS, setData, setIsPending, setIsError);

    return (
        <Character
            data={data}
            isPending={isPending}
            isError={isError}
        />
    );
}

export default App;
