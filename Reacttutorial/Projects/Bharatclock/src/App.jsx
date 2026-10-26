import ClockHeading from "./Components/Clockheading";
import ClockSlogan from "./Components/Clockslogan";
import Clockcurrenttime from "./Components/Clockcurrenttime";
import Temp from "./Components/Temp";
import "./App.css";

function App() {
  return (
    <>
      <div className="parentContainer">
        <ClockHeading></ClockHeading>
        <ClockSlogan></ClockSlogan>
        <Clockcurrenttime />
        <Temp />
      </div>
    </>
  );
}

export default App;
