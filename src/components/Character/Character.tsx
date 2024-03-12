import { Link, useParams } from 'react-router-dom';

export const Character = ({ id, name, species, avatarImg }) => {
    console.log(id, name, species, avatarImg);
    const param = useParams();
    console.log(param);
    return (
        <Link to={`/details/${id}`}>
            <li key={id}>
                <img
                    src={avatarImg}
                    alt={`Image of ${name}`}
                />
                <div>Name: {name}</div>
                <div>Species: {species}</div>
            </li>
        </Link>
    );
};
