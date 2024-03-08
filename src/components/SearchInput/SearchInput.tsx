export const SearchInput = ({ value, onChange, onEnter }) => {
    return (
        <input
            type='text'
            placeholder='Search by name'
            value={value}
            onChange={onChange}
            onClick={onEnter}
        />
    );
};
