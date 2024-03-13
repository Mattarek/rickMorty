export const Episodes = ({ data }) => {
    return (
        <ul>
            {data &&
                data?.map(({ episode, name }) => (
                    <li key={name}>{`${episode}: ${name}`}</li>
                ))}
        </ul>
    );
};
