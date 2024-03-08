export const handleSearchChange = (setSearchTerm, event) => {
    setSearchTerm(event?.target.value);
};

export const handleKeyPress = (setOnEnterPressValue, searchTerm, event) => {
    if (event.code === 'Enter') {
        setOnEnterPressValue(searchTerm);
    }
};
