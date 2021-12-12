import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";
import Navigation from "./components/Navigation";
// import Footer from "./components/Footer";
import logo from "./images/logo.png";
import TestBlock from "./components/TestBlock";
import BottomCreate from "./components/BottomCreate";
const App = () => {
  return (
    <div>
      {/* ---------------------Navigacija--------------------- */}
      <div id="website-container">
        <Navigation name="Testio" img={logo} user="Petras" />

        {/* ---------------------Search Blokelis--------------------- */}
        <SearchBar
          title="Testų kūrimo ir spendimo sistema"
          description="Kurkite, spręskite ir dalinkitės įvairiausiais testais, kontroliniais darbais ir klausimynais vienoje vietoje"
        ></SearchBar>
        {/* ---------------------End Search Blokelis--------------------- */}

        {/* ---------------------Test Blokelis--------------------- */}

        <div className="container-test-block">
          <TestBlock
            time="30"
            progress="30"
            questions="30"
            username="Vardenis Pavardenis"
            title="Gamtos pažinimo testas"
            description="Šis testas apibrežia visą reikiamą informaciją apie gamtos pažinimą ir viską kitką"
          />
          <TestBlock
            time="30"
            progress="30"
            questions="30"
            username="Vardenis Pavardenis"
            title="Gamtos pažinimo testas"
            description="Šis testas apibrežia visą reikiamą informaciją apie gamtos pažinimą ir viską kitką"
          />
          <TestBlock
            time="30"
            progress="30"
            questions="30"
            username="Vardenis Pavardenis"
            title="Gamtos pažinimo testas"
            description="Šis testas apibrežia visą reikiamą informaciją apie gamtos pažinimą ir viską kitką"
          />
          <TestBlock
            time="30"
            progress="30"
            questions="30"
            username="Vardenis Pavardenis"
            title="Gamtos pažinimo testas"
            description="Šis testas apibrežia visą reikiamą informaciją apie gamtos pažinimą ir viską kitką"
          />
          <TestBlock
            time="30"
            progress="30"
            questions="30"
            username="Vardenis Pavardenis"
            title="Gamtos pažinimo testas"
            description="Šis testas apibrežia visą reikiamą informaciją apie gamtos pažinimą ir viską kitką"
          />{" "}
          <TestBlock
            time="30"
            progress="30"
            questions="30"
            username="Vardenis Pavardenis"
            title="Gamtos pažinimo testas"
            description="Šis testas apibrežia visą reikiamą informaciją apie gamtos pažinimą ir viską kitką"
          />
          <TestBlock
            time="30"
            progress="30"
            questions="30"
            username="Vardenis Pavardenis"
            title="Gamtos pažinimo testas"
            description="Šis testas apibrežia visą reikiamą informaciją apie gamtos pažinimą ir viską kitką"
          />
          <TestBlock
            time="30"
            progress="30"
            questions="30"
            username="Vardenis Pavardenis"
            title="Gamtos pažinimo testas"
            description="Šis testas apibrežia visą reikiamą informaciją apie gamtos pažinimą ir viską kitką"
          />
          <TestBlock
            time="30"
            progress="30"
            questions="30"
            username="Vardenis Pavardenis"
            title="Gamtos pažinimo testas"
            description="Šis testas apibrežia visą reikiamą informaciją apie gamtos pažinimą ir viską kitką"
          />
          <TestBlock
            time="30"
            progress="30"
            questions="30"
            username="Vardenis Pavardenis"
            title="Gamtos pažinimo testas"
            description="Šis testas apibrežia visą reikiamą informaciją apie gamtos pažinimą ir viską kitką"
          />{" "}
          <TestBlock
            time="30"
            progress="30"
            questions="30"
            username="Vardenis Pavardenis"
            title="Gamtos pažinimo testas"
            description="Šis testas apibrežia visą reikiamą informaciją apie gamtos pažinimą ir viską kitką"
          />
          <TestBlock
            time="30"
            progress="30"
            questions="30"
            username="Vardenis Pavardenis"
            title="Gamtos pažinimo testas"
            description="Šis testas apibrežia visą reikiamą informaciją apie gamtos pažinimą ir viską kitką"
          />
          <TestBlock
            time="30"
            progress="30"
            questions="30"
            username="Vardenis Pavardenis"
            title="Gamtos pažinimo testas"
            description="Šis testas apibrežia visą reikiamą informaciją apie gamtos pažinimą ir viską kitką"
          />
          <TestBlock
            time="30"
            progress="30"
            questions="30"
            username="Vardenis Pavardenis"
            title="Gamtos pažinimo testas"
            description="Šis testas apibrežia visą reikiamą informaciją apie gamtos pažinimą ir viską kitką"
          />
          <TestBlock
            time="30"
            progress="30"
            questions="30"
            username="Vardenis Pavardenis"
            title="Gamtos pažinimo testas"
            description="Šis testas apibrežia visą reikiamą informaciją apie gamtos pažinimą ir viską kitką"
          />
        </div>
      </div>
      <BottomCreate />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
