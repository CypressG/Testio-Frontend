import logo from "../images/logo.png";
import {
  TestBlockManager,
  Footer,
  SearchBar,
  Navigation,
  BottomCreate,
} from "./index";

const Home = () => {
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

export default Home;