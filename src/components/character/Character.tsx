import { CharacterProps, IResults } from '../../types/Api';

export const Character = ({
    isPending,
    isError,
    data,
    searchTerm,
    hideEpisode,
}: CharacterProps) => {
    console.log(data && data.results);

    const extractEpisodeNumber = (episode: string) => {
        const matchResult = episode.match(/\/(\d+)$/);
        return matchResult ? matchResult[1] : null;
    };

    return (
        <ul>
            {isPending ? (
                <div>Loading...</div>
            ) : isError ? (
                <div>Error occurred while fetching data.</div>
            ) : (
                data?.results
                    ?.filter((element) => {
                        const lowercaseName = element.name.toLowerCase();
                        const lowercaseSearchTerm = searchTerm.toLowerCase();
                        return lowercaseName.includes(lowercaseSearchTerm);
                    })
                    .map(
                        ({
                            name,
                            id,
                            image,
                            species,
                            episode,
                            gender,
                        }: IResults) => (
                            <li key={id}>
                                <img
                                    src={image}
                                    alt='Image of character'
                                />
                                <div>{name}</div>
                                <div>Gender: {gender}</div>
                                <div>Species: {species}</div>
                                <ul className='CharacterViews'>
                                    Seen in episodes:{' '}
                                    {hideEpisode &&
                                        episode.map((element, index) => (
                                            <li key={element}>
                                                {`${extractEpisodeNumber(
                                                    element,
                                                )}${
                                                    index < episode.length - 1
                                                        ? ','
                                                        : ''
                                                }`}
                                            </li>
                                        ))}
                                </ul>
                            </li>
                        ),
                    )
            )}
        </ul>
    );
};
