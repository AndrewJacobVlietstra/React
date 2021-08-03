import React from 'react';

function Pagination({prevPage, nextPage}) {
    return (
        <>
            <button type='submit' onClick={prevPage}>Prev</button>
            <button type='submit' onClick={nextPage}>Next</button>
        </>
    )
}

export default Pagination;
