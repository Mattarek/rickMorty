export const Character = ({
    id,
    name,
    gender,
    species,
    episode,
    image,
    hideEpisode,
    extractEpisodeNumber,
}) => {
    return (
        <li key={id}>
            <img
                src={image}
                alt='Image of character'
            />
            <div>{name}</div>
            <div>Gender: {gender}</div>
            <div>Species: {species}</div>
            {hideEpisode && (
                <ul className='CharacterViews'>
                    Seen in episodes:{' '}
                    {episode.map((element, index) => (
                        <>
                            <li key={element}>
                                {`${extractEpisodeNumber(element)}${
                                    index < episode.length - 1 ? ',' : ''
                                }`}
                            </li>
                        </>
                    ))}
                </ul>
            )}
        </li>
    );
};
