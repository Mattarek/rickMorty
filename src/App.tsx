import './App.css';
import { useFetch } from './components/api/useFetch';
import { URLS } from './components/constant/api';

function App() {
    const { data, isPending, isError } = useFetch(URLS.API_URI_CHARACTERS);

    if (isError) {
        return <div>Error occurred.</div>;
    }

    if (isPending) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {isPending ? (
                <div>Loading...</div>
            ) : (
                data?.results?.map(({ name, id, image, species }) => {
                    return (
                        <div key={id}>
                            <div>{name}</div>
                            <img
                                src={image}
                                alt=''
                            />
                            <div>{species}</div>
                        </div>
                    );
                })
            )}
        </div>
    );
}

export default App;
