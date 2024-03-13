export const prepareUrl = (episode) => {
    const characterEpisodes = episode.map((element) =>
        parseInt(element.split('episode/')[1]),
    );

    const episodesString = characterEpisodes.reduce((acc, current, index) => {
        if (index === 0) {
            return current.toString();
        } else {
            const previousNumber = characterEpisodes[index - 1];
            if (current - previousNumber === 1) {
                return `${acc},${current}`;
            } else {
                return `${acc},${previousNumber + 1},${current}`;
            }
        }
    }, '');

    return episodesString;
};
