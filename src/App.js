import { useState } from "react";
import FilteredList from "./FilterList/filteredList";
import SearchBox from "./SearchBox/searchBox";

function App() {
  const [appState, updateState] = useState({
    elements: [],
    searchedText: "",
  });

  const change = (event) => {
    console.log(event);
    /* updateState({...appState, }) */
  }

  return (
    <div className="App">
      <SearchBox handleChange={change}/>
      <FilteredList elements={appState.elements} searchedElement={appState.searchedText}/>
    </div>
  );
}

export default App;
