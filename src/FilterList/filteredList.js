import React from "react";

const FilteredList = ({elements, searchedElement}) => {
    
    const findElements = elements.filter(element =>  element === searchedElement)  
    
    return (
        <>
            <section>                
                <ul>
                {
                    findElements.map(element => <li>element</li>)
                }                                             
                </ul>                               
            </section>

        </>
        
    )
}

export default FilteredList;