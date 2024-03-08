import './App.css';

import { useState } from 'react';
import { Characters } from './components/CharactersList';
import { URLS } from './constant/api';
import { useFetch } from './components/api/useFetch';
import { SearchInput } from './components/SearchInput/SearchInput';

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [hideEpisode, setHideEpisode] = useState(false);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const { data, isPending, isError } = useFetch(URLS.API_URI_CHARACTERS);

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
                        searchTerm={searchTerm}
                        hideEpisode={hideEpisode}
                    />
                )
            )}
        </>
    );
}

export default App;
