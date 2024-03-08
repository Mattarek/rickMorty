export const Character = ({ id, name, gender, species, image }) => {
    return (
        <li key={id}>
            <img
                src={image}
                alt='Image of character'
            />
            <div>Name: {name}</div>
            <div>Species: {species}</div>
        </li>
    );
};
