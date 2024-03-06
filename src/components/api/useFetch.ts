export const useFetch = async (url: string) => {
    try {
        const data = await fetch(url);
        const result = await data.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
