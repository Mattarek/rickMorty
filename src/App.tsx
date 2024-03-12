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
    const [onPressEnter, setOnPressEnter] = useState<string>('');
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [url, setUrl] = useState<string>(URLS.API_URI_CHARACTERS);

    const { data, isPending, isError, pageCount } = useFetch(
        url,
        pageNumber,
        onPressEnter,
    );

    const handleSearchChange = (event) => {
        setSearchTerm(event?.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.code === 'Enter') {
            setOnPressEnter(searchTerm);
            setUrl(
                `${URLS.API_URI_CHARACTERS}/?name=${searchTerm}&page=${pageNumber}`,
            );
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
                    setUrl(
                        `${URLS.API_URI_CHARACTERS}/?name=${searchTerm}&page=${pageNumber}`,
                    );
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
                    console.log(pageNumber);
                    setUrl(
                        `${URLS.API_URI_CHARACTERS}/?name=${searchTerm}&page=${pageNumber}`,
                    );
                }}>
                Next page
            </button>
        </>
    );
}

export default App;
