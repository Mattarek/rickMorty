import { ApiData, CharacterProps } from '../../types/Api';

export const Character = ({ isPending, data }: CharacterProps) => {
    return (
        <div>
            {isPending ? (
                <div>Loading...</div>
            ) : (
                data?.results?.map(
                    ({ name, id, image, species, episode }: ApiData) => {
                        return (
                            <div key={id}>
                                <div>{name}</div>
                                <img
                                    src={image}
                                    alt=''
                                />
                                <div>{species}</div>
                                <ul>
                                    Seen in episodes:{' '}
                                    {episode.map((element) => {
                                        return (
                                            <li>
                                                {element[element.length - 1]}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    },
                )
            )}
        </div>
    );
};
