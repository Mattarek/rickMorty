import { URLS } from '../../constant/api';
import { IData, IResults } from '../../types/Api';
import { useFetch } from '../../utils/api';
import { Character } from '../Character/';

export interface CharacterProps {
    data: IData;
    searchTerm: string;
}

export const CharactersList = ({ data, searchTerm }: CharacterProps) => {
    const { dataFilter } = useFetch(
        `${URLS.API_URI_CHARACTERS}/?name=${searchTerm}`,
    );
    console.log(dataFilter);
    const filteredData = (dataFilter ?? data)?.results?.filter((element) => {
        const lowercaseName = element.name.toLowerCase();
        const lowercaseSearchTerm = searchTerm.toLowerCase();
        return lowercaseName.includes(lowercaseSearchTerm);
    });

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
