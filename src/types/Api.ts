export interface IResults {
    name: string;
    id: number;
    image: string;
    species: string;
    episode: string[];
    results: IResults[];
    gender: string;
}

export interface IData {
    results: IResults[];
}

export interface CharacterProps {
    isPending: boolean;
    isError: boolean;
    data: IData;
    searchTerm: string;
}
