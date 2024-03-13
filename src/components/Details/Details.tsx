import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { URLS } from '../../constant/api';
import { Episodes } from '../Episodes/';
import { Gender } from '../Gender/Gender';

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

    const { name, image, episode, gender, location, status } =
        useLoaderData() as DataLoader;

    const characterEpisodes = episode.map((element) =>
        parseInt(element.split('episode/')[1]),
    );

    const episodesString = characterEpisodes.reduce((acc, current, index) => {
        if (index === 0) {
            return current.toString();
        } else {
            const previousNumber = characterEpisodes[index - 1];
            if (current - previousNumber === 1) {
                return `${acc},${current}`;
            } else {
                return `${acc},${previousNumber + 1},${current}`;
            }
        }
    }, '');

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
                    <div>{location.name}</div>
                    <img
                        src={image}
                        alt={`Photo of ${name}`}
                    />
                    <div>
                        <div>
                            <Gender gender={gender} />
                        </div>

                        <ul>
                            <Episodes data={data} />
                        </ul>
                    </div>
                </li>
            </ul>
            <div>
                <Link to='/'>
                    <FaArrowLeft /> Powrót
                </Link>
            </div>
        </>
    );
};
