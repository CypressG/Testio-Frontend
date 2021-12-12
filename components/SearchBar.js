const searchBar = (props) => {
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
            Select subject
          </option>
        </select>
      </div>
    </div>
  );
};

export default searchBar;
