export interface IResults {
    name: string;
    id: number;
    image: string;
    species: string;
    episode: string[];
    gender: string;
}

export interface IData {
    results: IResults[];
}
