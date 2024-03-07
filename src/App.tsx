import './App.css';

import { useState } from 'react';
import { Characters } from './components/Characters';
import { URLS } from './constant/api';
import { useFetch } from './components/api/useFetch';
import { SearchInput } from './components/SearchInput/SearchInput';

function App() {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [isError, setIsError] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [hideEpisode, setHideEpisode] = useState(false);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useFetch(URLS.API_URI_CHARACTERS, setData, setIsPending, setIsError);

    return (
        <>
            <div>
                <SearchInput
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button onClick={() => setHideEpisode(!hideEpisode)}>
                    {hideEpisode ? <p>Hide</p> : <p>Show</p>}
                </button>
            </div>

            {isPending ? (
                <div>Loading...</div>
            ) : isError ? (
                <div>Error occurred while fetching data.</div>
            ) : (
                data && (
                    <Characters
                        data={data}
                        isPending={isPending}
                        isError={isError}
                        searchTerm={searchTerm}
                        hideEpisode={hideEpisode}
                    />
                )
            )}
        </>
    );
}

export default App;
