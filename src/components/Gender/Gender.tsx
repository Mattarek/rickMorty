export const Gender = (gender) => {
    return (
        <>
            {gender === 'Female' ? (
                <span>Wystąpiła</span>
            ) : (
                <span>Wystąpił</span>
            )}{' '}
            w odcinku:{' '}
        </>
    );
};
