import ClockHeading from "./Components/Clockheading";
import ClockSlogan from "./Components/Clockslogan";
import Clockcurrenttime from "./Components/Clockcurrenttime";
import "./App.css";

function App() {
  return (
    <>
      <div className="parentContainer">
        <ClockHeading></ClockHeading>
        <ClockSlogan></ClockSlogan>
        <Clockcurrenttime />
      </div>
    </>
  );
}

export default App;
