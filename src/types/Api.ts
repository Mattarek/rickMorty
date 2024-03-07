export interface CharacterProps {
    isPending: boolean;
    isError: boolean;
    data: {
        results: Array<{
            name: string;
            id: number;
            image: string;
            species: string;
            episode: string[];
            results: Array<string>;
        }>;
    };
}
