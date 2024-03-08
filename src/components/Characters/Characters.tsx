import { useState } from 'react';
import { IData, IResults } from '../../types/Api';
import { Character } from '../Character/Character';

export interface CharacterProps {
    isPending: boolean;
    isError: boolean;
    data: IData;
    searchTerm: string;
    hideEpisode: boolean;
}

export const Characters = ({
    isPending,
    isError,
    data,
    searchTerm,
    hideEpisode,
}: CharacterProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isFiltered, setIsFiltered] = useState(false);

    const itemsPerPage = data.results.length / 2;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const filteredData = data?.results?.filter((element) => {
        const lowercaseName = element.name.toLowerCase();
        const lowercaseSearchTerm = searchTerm.toLowerCase();
        return lowercaseName.includes(lowercaseSearchTerm);
    });
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

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
                <>
                    <button onClick={() => setIsFiltered(!isFiltered)}>
                        Filtruj
                    </button>
                    {(isFiltered ? currentItems : data.results).map(
                        ({
                            name,
                            id,
                            image,
                            species,
                            episode,
                            gender,
                        }: IResults) => (
                            <Character
                                key={id}
                                id={id}
                                name={name}
                                image={image}
                                species={species}
                                episode={episode}
                                gender={gender}
                                hideEpisode={hideEpisode}
                                extractEpisodeNumber={extractEpisodeNumber}
                            />
                        ),
                    )}

                    {[1, 2].map((element) => (
                        <button
                            key={element}
                            onClick={(event) => {
                                event.preventDefault();
                                setCurrentPage(element);
                            }}>
                            {element}
                        </button>
                    ))}
                </>
            )}
        </ul>
    );
};
