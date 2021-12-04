import "./Hello.css";
import React, { useState, useEffect } from "react";

function Hello() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://testioapi.herokuapp.com/api/")
      .then((response) => response.json())
      .then((data) => setData(data[1].description));
  }, []);
  return (
    <div className="flex-container">
      <h4>{data}</h4>
    </div>
  );
}

export default Hello;
