import { Link } from 'react-router-dom';

export const Character = ({ id, name, species, avatarImg }) => {
    return (
        <Link to={`/details/${id}`}>
            <li>
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
