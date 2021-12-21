import ReactDOM from "react-dom";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Test = () => {
  return <h1>Sdarof pacani</h1>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
