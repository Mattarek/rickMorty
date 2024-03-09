import { IData, IResults } from '../../types/Api';
import { Character } from '../Character/';

export interface CharacterProps {
    data: IData;
    searchTerm: string;
    isError: boolean;
    isPending: boolean;
}

export const CharactersList = ({
    data,
    searchTerm,
    isPending,
    isError,
}: CharacterProps) => {
    const filteredData = data?.results?.filter((element) => {
        const lowercaseName = element.name.toLowerCase();
        const lowercaseSearchTerm = searchTerm.toLowerCase();
        return lowercaseName.includes(lowercaseSearchTerm);
    });

    if (isPending) return <div>Loading...</div>;
    if (isError) return <div>Error occurred while fetching data.</div>;

    return (
        <ul>
            {filteredData.map(({ name, id, image, species }: IResults) => (
                <Character
                    key={id}
                    id={id}
                    name={name}
                    avatarImg={image}
                    species={species}
                />
            ))}
        </ul>
    );
};
