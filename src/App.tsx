import './App.css';

import { useState } from 'react';
import { CharactersList } from './components/CharactersList';
import { URLS } from './constant/api';
import { useFetch } from './components/api/useFetch';
import { SearchInput } from './components/SearchInput/SearchInput';

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchingTerm, searchingTermTerm] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const { data, isPending, isError, pageCount } = useFetch(
        `${URLS.API_URI_CHARACTERS}/?page=${pageNumber}`,
    );

    const handleSearchChange = (event) => {
        setSearchTerm(event?.target.value);
    };

    const handleOnEnterEvent = (event) => {
        if (event.key === 'Enter') searchingTermTerm(event?.target.value);
    };

    return (
        <>
            <SearchInput
                value={searchTerm}
                onChange={handleSearchChange}
                onEnter={handleOnEnterEvent}
            />

            {isPending ? (
                <div>Loading...</div>
            ) : isError ? (
                <div>Error occurred while fetching data.</div>
            ) : (
                data && (
                    <CharactersList
                        data={data}
                        searchTerm={searchingTerm}
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
