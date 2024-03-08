import { IData, IResults } from '../../types/Api';
import { Character } from '../Character/Character';

export interface CharacterProps {
    data: IData;
    searchTerm: string;
}

export const CharactersList = ({ data, searchTerm }: CharacterProps) => {
    const filteredData = data?.results?.filter((element) => {
        const lowercaseName = element.name.toLowerCase();
        const lowercaseSearchTerm = searchTerm.toLowerCase();
        return lowercaseName.includes(lowercaseSearchTerm);
    });

    return (
        <ul>
            <>
                {filteredData.map(
                    ({ name, id, image, species, gender }: IResults) => (
                        <Character
                            key={id}
                            id={id}
                            name={name}
                            image={image}
                            species={species}
                            gender={gender}
                        />
                    ),
                )}
            </>
        </ul>
    );
};
