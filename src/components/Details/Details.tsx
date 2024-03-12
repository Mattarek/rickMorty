import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { URLS } from '../../constant/api';
import { useFetch } from '../../utils/api';
import { useEffect, useState } from 'react';

export const Details = () => {
    const [data, setData] = useState();
    const { name, image, episode, gender, location, status } = useLoaderData();
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
            const data = await response.json();
            setData(data);
            console.log(data && data[3].name);
        };
        fetchData();
    }, []);

    return (
        <>
            <ul>
                <li>
                    <div>Imie: {name}</div>
                    <div>Status: {status}</div>
                    <img
                        src={image}
                        alt={`Photo of ${name}`}
                    />
                    <div>
                        <div>
                            {gender === 'Female' ? (
                                <span>Wystąpiła</span>
                            ) : (
                                <span>Wystąpił</span>
                            )}{' '}
                            w odcinku:{' '}
                        </div>

                        {data &&
                            episode.map((element, index) => {
                                const viewedEpisode =
                                    element.split('episode/')[1];

                                return index === episode.length - 1
                                    ? `${viewedEpisode}`
                                    : `${viewedEpisode} (${data[index].name}), `;
                            })}
                    </div>
                    {console.log(data)}
                    <div>{location.name}</div>
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
