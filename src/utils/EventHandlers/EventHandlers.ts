import { URLS } from '../../constant/api';
import { useFetch } from '../api';

export const handleSearchChange = (setSearchTerm, event) => {
    setSearchTerm(event?.target.value);
};

export const handleKeyPress = (setOnEnterPressValue, searchTerm, event) => {
    if (event.code === 'Enter') {
        useFetch(`${URLS.API_URI_CHARACTERS}/?name=${searchTerm}`);
        setOnEnterPressValue(searchTerm);
    }
};
