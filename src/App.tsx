import { useState } from 'react';

import { URLS } from './constant/api';
import { useFetch } from './utils/api';
import { CharactersList } from './components/CharactersList';
import { SearchInput } from './components/SearchInput/';
import { IsPending } from './components/IsPending/';
import { IsError } from './components/IsError/';

import './App.css';
import { useNavigate, useLoaderData } from 'react-router-dom';

function App() {
    const [name, setName] = useState<string>('');
    const [searchName, setSearchName] = useState<string>('');
    const [pageNumber, setPageNumber] = useState<number>(1);
    const { data, isPending, isError, pageCount } = useFetch(
        URLS.API_URI_CHARACTERS,
        pageNumber,
        name,
    );
    const [dataProp, setDataProp] = useState(data);

    const navigate = useNavigate();
    const handleSearchChange = (event) => {
        setSearchName(event?.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.code === 'Enter') {
            setDataProp(data);
            searchName !== name && setPageNumber(1);
            setName(searchName);
        }
    };

    const dataLoader = useLoaderData();
    if (isPending) return <IsPending />;
    if (isError) return <IsError />;

    return (
        <>
            <SearchInput
                value={searchName}
                onChange={handleSearchChange}
                onKeyDown={handleKeyPress}
            />
            <CharactersList
                pageNumber={pageNumber}
                data={dataProp}
            />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    pageNumber < pageCount &&
                        setPageNumber((prev) => {
                            setDataProp(dataLoader);
                            const nextPage = prev - 1;
                            if (nextPage <= pageCount) {
                                navigate(`/page/${nextPage}`);
                                return nextPage;
                            }
                            return nextPage;
                        });
                }}>
                Previous page
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    pageNumber < pageCount &&
                        setPageNumber((prev) => {
                            setDataProp(dataLoader);
                            const nextPage = prev + 1;
                            if (nextPage <= pageCount) {
                                navigate(`/page/${nextPage}`);
                                return nextPage;
                            }
                            return nextPage;
                        });
                }}>
                Next page
            </button>
        </>
    );
}

export default App;
