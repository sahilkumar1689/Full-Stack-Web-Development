import Btn from "./Btn";

function Buttons({ getClickedData }) {
  let arrData = [
    "(",
    ")",
    "C",
    "X",
    "1/x",
    "X^2",
    "logx",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
  ];
  return (
    <>
      <div className="buttonContainer">
        {arrData.map((elem) => (
          <Btn
            key={elem}
            Data={elem}
            getChildClickedData={() => {
              getClickedData(elem);
            }}
          ></Btn>
        ))}
      </div>
    </>
  );
}
export default Buttons;
