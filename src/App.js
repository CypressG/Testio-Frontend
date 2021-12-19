import ReactDOM from "react-dom";
import logo from "./images/logo.png";
import {
  TestBlockManager,
  Footer,
  SearchBar,
  Navigation,
  BottomCreate,
} from "./components/index";

const App = () => {
  return (
    <div>
      <div id="website-container">
        <Navigation name="Testio" img={logo} user="Petras" />
        <SearchBar
          title="Testų kūrimo ir spendimo sistema"
          description="Kurkite, spręskite ir dalinkitės įvairiausiais testais, kontroliniais darbais ir klausimynais vienoje vietoje"
        ></SearchBar>
        <TestBlockManager />
      </div>
      <BottomCreate />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
