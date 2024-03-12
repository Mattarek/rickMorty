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
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [pageNumber, setPageNumber] = useState<number>(1);

    const handleSearchChange = (event) => {
        setSearchTerm(event?.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.code === 'Enter') {
            searchTerm === name ? null : setPageNumber(1);
            setName(searchTerm);
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
                value={searchTerm}
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
                    pageNumber < pageCount &&
                        setPageNumber((prev) => {
                            console.log(prev);
                            return ++prev;
                        });
                }}>
                Next page
            </button>
        </>
    );
}

export default App;
