import { IData, IResults } from '../../types/Api';
import { Character } from '../Character/';

export interface CharacterProps {
    data: IData;
    searchTerm: string;
}

export const CharactersList = ({ data }) => {
    return (
        <ul>
            {data?.results.map(({ name, id, image, species }: IResults) => (
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
