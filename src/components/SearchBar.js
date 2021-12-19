import { useState } from "react";

const searchBar = (props) => {
  const [category, setCategory] = useState([]);
  fetch("https://testioapi.herokuapp.com/api/tests/categories")
    .then((response) => response.json())
    .then((data) => setCategory(data));

  return (
    <div className="searchbar-container">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <div id="searchbar-input-container">
        <input id="search" placeholder="Paieška">
          {props.bar}
        </input>
      </div>
      <div id="searchbar-dropbox-container">
        <select id="dropbox">
          <option value="" selected="selected">
            Pasirinkite kategoriją
          </option>
          {category.map((elementas) => {
            return <option key={elementas.pk}>{elementas.name}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default searchBar;
