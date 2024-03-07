import './App.css';
import { useFetch } from './components/api/useFetch';
import { Character } from './components/character/Character';
import { URLS } from './constant/api';

function App() {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [isError, setIsError] = useState(false);

    const { data, isPending, isError } = useFetch(URLS.API_URI_CHARACTERS);

    if (isError) {
        return <div>Error occurred.</div>;
    }

    if (isPending) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Character
                data={data}
                isPending={isPending}
            />
        </div>
    );
}

export default App;
