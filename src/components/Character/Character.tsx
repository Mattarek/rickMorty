export const Character = ({ id, name, species, avatarImg }) => {
    return (
        <li key={id}>
            <img
                src={avatarImg}
                alt={`Image of ${name}`}
            />
            <div>Name: {name}</div>
            <div>Species: {species}</div>
        </li>
    );
};
