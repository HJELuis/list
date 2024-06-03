import React, { useEffect, useState } from "react";
import FilteredList from "./FilterList";
import SearchBox from "./SearchBox";
import "./styles/style.css"

function App() {
  const [list, setList] = useState({
    elements: [

      {id:1, name:"Luis"},
      {id:2, name:"Enrique"},
      {id:3, name:"Emilio"},
      {id:4, name:"Luis"},
      {id:5, name:"Enrique"},
      {id:6, name:"Emilio"},
    ]});

  const [text, setText] = useState("");
  
  const changeText = (event) => {    
    setText(event.target.value);
  }

  return (
    <div className="App">
      <section>
        <h1>Lista de nombres</h1>
        <ol>
          {
            list.elements.map(element => (
              <li key={element.id}>{element.name}</li>
            ))
          }
        </ol>
      </section>
      <SearchBox handleChange={changeText}/>
      <FilteredList elements={list.elements} searchedElement={text}/>
    </div>
  );
}

export default App;
