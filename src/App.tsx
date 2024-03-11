import { useState } from 'react';

import { URLS } from './constant/api';
import { useFetch } from './utils/api';
import { CharactersList } from './components/CharactersList';
import { SearchInput } from './components/SearchInput/';
import { IsPending } from './components/IsPending/';
import { IsError } from './components/IsError/';

import './App.css';

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [onEnterPressValue, setOnEnterPressValue] = useState('');
    const [pageNumber, setPageNumber] = useState(1);

    const { data, isPending, isError, pageCount } = useFetch(
        `${URLS.API_URI_CHARACTERS}/?page=${pageNumber}`,
    );

    const handleSearchChange = (event) => {
        setSearchTerm(event?.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.code === 'Enter') {
            setOnEnterPressValue(searchTerm);
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
            {data && <CharactersList data={data} />}
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
                    pageNumber < pageCount && setPageNumber(pageNumber + 1);
                }}>
                Next page
            </button>
        </>
    );
}

export default App;
