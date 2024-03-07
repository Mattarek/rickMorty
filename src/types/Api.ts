export interface ApiData {
    name: string;
    id: number;
    image: string;
    species: string;
    episode: string[];
}

export interface CharacterProps {
    isPending: boolean;
    data: {
        name: string;
        id: number;
        image: string;
        species: string;
        episode: string;
        results: string[];
    };
}
