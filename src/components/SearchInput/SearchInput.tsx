export const SearchInput = ({ value, onChange, onKeyDown }) => {
    return (
        <input
            type='text'
            placeholder='Search by name'
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    );
};
