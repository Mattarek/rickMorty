import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { URLS } from '../../constant/api';
import { Episodes } from '../Episodes/';
import { Gender } from '../Gender/Gender';
import { prepareUrl } from '../../utils/api/UrlPrepareTool';

interface DataLoader {
    name: string;
    image: string;
    episode: string[];
    gender: string;
    location: {
        name: string;
        url: string;
    };
    status: string;
}

export const Details = () => {
    const [data, setData] = useState<
        | Array<{
              episode: string;
              name: string;
          }>
        | undefined
    >();

    const {
        name,
        image,
        episode,
        gender,
        location: { name: nameLocation },
        status,
    } = useLoaderData() as DataLoader;

    const episodesString = prepareUrl(episode);
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `${URLS.API_URI_EPISODES}/${episodesString}`,
            );
            const fetchedData = await response.json();
            setData(Array.isArray(fetchedData) ? fetchedData : [fetchedData]);
        };
        fetchData();
    }, []);

    return (
        <>
            <ul>
                <li>
                    <div>Imie: {name}</div>
                    <div>Status: {status}</div>
                    <div>{nameLocation}</div>
                    <img
                        src={image}
                        alt={`Photo of ${name}`}
                    />
                    <br />
                    <Gender gender={gender} />
                    <Episodes data={data} />
                </li>
            </ul>
            <div>
                <button onClick={handleGoBack}>
                    <FaArrowLeft /> Powrót
                </button>
            </div>
        </>
    );
};
