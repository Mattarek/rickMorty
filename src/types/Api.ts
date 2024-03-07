export interface IResults {
    name: string;
    id: number;
    image: string;
    species: string;
    episode: string[];
    results: IResults[];
}

export interface CharacterResponse {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
}

export interface ResultsResponse {
    results: CharacterResponse[];
}

export interface IData {
    results: IResults[];
}

export interface CharacterProps {
    isPending: boolean;
    isError: boolean;
    data: IData;
}

export interface UseFetchProps {
    (
        url: string,
        setData: () => void,
        setIsPending: (isPending: boolean) => void,
        setIsError: (isError: boolean) => void,
    ): void;
}
