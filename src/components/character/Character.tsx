import { CharacterProps } from '../../types/Api';

export const Character = ({ isPending, data: { results } }: CharacterProps) => {
    return (
        <div>
            {isPending ? (
                <div>Loading...</div>
            ) : (
                results?.map(({ name, id, image, species, episode }) => {
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
                                        <li>{element[element.length - 1]}</li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })
            )}
        </div>
    );
};
