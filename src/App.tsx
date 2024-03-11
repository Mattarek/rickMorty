import { useState } from 'react';

import { URLS } from './constant/api';
import { useFetch } from './utils/api';
import { CharactersList } from './components/CharactersList';
import { SearchInput } from './components/SearchInput/';
import { IsPending } from './components/IsPending/';
import { IsError } from './components/IsError/';

import './App.css';

function App() {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [url, setUrl] = useState<string>(URLS.API_URI_CHARACTERS);

    const { data, isPending, isError, pageCount } = useFetch(url);

    const handleSearchChange = (event) => {
        setSearchTerm(event?.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.code === 'Enter') {
            setUrl(`${URLS.API_URI_CHARACTERS}/?name=${searchTerm}`);

            console.log(data, isPending, isError, pageCount);
        }
    };

    if (isPending) return <IsPending />;
    if (isError) return <IsError />;

    return (
        <>
            <SearchInput
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyDown={handleKeyPress}
            />
            <CharactersList data={data} />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    console.log(`${pageNumber} / ${pageCount}`);
                    1 < pageNumber && setPageNumber(pageNumber - 1);
                }}>
                Previous page
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    console.log(`${pageNumber} / ${pageCount}`);
                    pageNumber < pageCount && setPageNumber(pageNumber + 1);
                }}>
                Next page
            </button>
        </>
    );
}

export default App;
