export const Episodes = (data) => {
    return (
        <>
            {data?.map(({ episode, name }) => (
                <li key={name}>{`${episode}: ${name}`}</li>
            ))}
        </>
    );
};
