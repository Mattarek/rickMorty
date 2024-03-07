import './App.css';
import { useFetch } from './components/api/useFetch';
import { Character } from './components/character/Character';
import { URLS } from './constant/api';

function App() {
    const { data, isPending, isError } = useFetch(URLS.API_URI_CHARACTERS);

    return (
        <Character
            data={data}
            isPending={isPending}
            isError={isError}
        />
    );
}

export default App;
