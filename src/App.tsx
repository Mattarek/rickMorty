import './App.css';

import { useState } from 'react';
import { CharactersList } from './components/CharactersList';
import { URLS } from './constant/api';
import { useFetch } from './components/api/useFetch';
import { SearchInput } from './components/SearchInput/SearchInput';

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const { data, isPending, isError } = useFetch(URLS.API_URI_CHARACTERS);

    const handleSearchChange = (event) => {
        setSearchTerm(event?.target.value);
    };

    return (
        <>
            <SearchInput
                value={searchTerm}
                onChange={handleSearchChange}
            />

            {isPending ? (
                <div>Loading...</div>
            ) : isError ? (
                <div>Error occurred while fetching data.</div>
            ) : (
                data && (
                    <CharactersList
                        data={data}
                        searchTerm={searchTerm}
                    />
                )
            )}
        </>
    );
}

export default App;
