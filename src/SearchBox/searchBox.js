import React from "react";


const SearchBox = (handleChange) => {

    return (
        <>
            <section>
                <input type="text" placeholder="texto" onChange={handleChange}/>               
            </section>
            
        </>
    )
};

export default SearchBox;