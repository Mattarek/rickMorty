export interface IResults {
    name: string;
    id: number;
    image: string;
    species: string;
    episode: string[];
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
        setData: (data: [] | IData) => void,
        setIsPending: (isPending: boolean) => void,
        setIsError: (isError: boolean) => void,
    ): void;
}
