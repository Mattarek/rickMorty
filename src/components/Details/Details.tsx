import { useLoaderData } from 'react-router-dom';

export const Details = () => {
    const data = useLoaderData();
    console.log('DANE: ');
    return (
        <ul>
            <li>{data.name}</li>
            <img
                src={data.image}
                alt=''
            />
        </ul>
    );
};
