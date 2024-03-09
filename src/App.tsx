import { useState } from 'react';

import { URLS } from './constant/api';
import { useFetch } from './utils/api';
import { CharactersList } from './components/CharactersList';
import { SearchInput } from './components/SearchInput/';
import { handleKeyPress, handleSearchChange } from './utils/EventHandlers/';

import './App.css';

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [onEnterPressValue, setOnEnterPressValue] = useState('');
    const [pageNumber, setPageNumber] = useState(1);

    const { data, isPending, isError, pageCount } = useFetch(
        searchTerm
            ? `${URLS.API_URI_CHARACTERS}/?name=${searchTerm}`
            : `${URLS.API_URI_CHARACTERS}/?page=${pageNumber}`,
    );

    return (
        <>
            <SearchInput
                value={searchTerm}
                onChange={(event) => handleSearchChange(setSearchTerm, event)}
                onKeyDown={(event) =>
                    handleKeyPress(setOnEnterPressValue, searchTerm, event)
                }
            />

            {data && (
                <CharactersList
                    isPending={isPending}
                    isError={isError}
                    data={data}
                    searchTerm={onEnterPressValue}
                />
            )}
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
