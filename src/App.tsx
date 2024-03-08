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
        `${URLS.API_URI_CHARACTERS}/?page=${pageNumber}`,
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

            {isPending ? (
                <div>Loading...</div>
            ) : isError ? (
                <div>Error occurred while fetching data.</div>
            ) : (
                data && (
                    <CharactersList
                        data={data}
                        searchTerm={onEnterPressValue}
                    />
                )
            )}
            <button
                onClick={() => {
                    pageNumber > 1 ? setPageNumber(pageNumber - 1) : null;
                }}>
                Previous page
            </button>
            <button
                onClick={() => {
                    pageNumber < pageCount
                        ? setPageNumber(pageNumber + 1)
                        : null;
                }}>
                Next page
            </button>
        </>
    );
}

export default App;
