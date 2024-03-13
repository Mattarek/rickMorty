import { useState } from 'react';

import { URLS } from './constant/api';
import { useFetch } from './utils/api';
import { CharactersList } from './components/CharactersList';
import { SearchInput } from './components/SearchInput/';
import { IsPending } from './components/IsPending/';
import { IsError } from './components/IsError/';

import './App.css';

function App() {
    const [name, setName] = useState<string>('');
    const [searchName, setSearchName] = useState<string>('');
    const [pageNumber, setPageNumber] = useState<number>(1);

    const handleSearchChange = (event) => {
        setSearchName(event?.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.code === 'Enter') {
            searchName !== name && setPageNumber(1);
            setName(searchName);
        }
    };

    const { data, isPending, isError, pageCount } = useFetch(
        URLS.API_URI_CHARACTERS,
        pageNumber,
        name,
    );

    if (isPending) return <IsPending />;
    if (isError) return <IsError />;

    return (
        <>
            <SearchInput
                value={searchName}
                onChange={handleSearchChange}
                onKeyDown={handleKeyPress}
            />
            <CharactersList data={data} />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    1 < pageNumber && setPageNumber(pageNumber - 1);
                }}>
                Previous page
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    pageNumber < pageCount && setPageNumber((prev) => ++prev);
                }}>
                Next page
            </button>
        </>
    );
}

export default App;
