import React from "react";


const SearchBox = ({handleChange}) => {

    return (
        <>
            <section>
                <label htmlFor="searchedText">Búsqueda: </label>
                <input id="searchedText" type="text" placeholder="Ingresa algún nombre" onChange={handleChange}/>               
            </section>            
        </>
    )
};

export default SearchBox;