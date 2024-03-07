export const SearchInput = ({ value, onChange }) => {
    return (
        <input
            type='text'
            placeholder='Search by name'
            value={value}
            onChange={onChange}
        />
    );
};
