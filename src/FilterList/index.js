import React from "react";

const FilteredList = ({elements, searchedElement}) => {
    
    const findElements = elements.filter(element =>  searchedElement === "" ? "" : element.name.includes(searchedElement));
    
    return (
        <>
            <section>                
                <ul>
                {
                    findElements.map(element => <li key={element.id}>{element.id} {element.name}</li>)
                }                                             
                </ul>                               
            </section>

        </>
        
    )
}

export default FilteredList;