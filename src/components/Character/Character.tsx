import { Link } from 'react-router-dom';

export const Character = ({ id, name, species, avatarImg, pageNumber }) => {
    return (
        <Link to={`/page/${pageNumber}/character/${id}`}>
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
