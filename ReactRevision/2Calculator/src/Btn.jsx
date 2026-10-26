import React from "react";

function Btn({ dataBtn, getBtnValue }) {
  return (
    <>
      <div className="btnContainer">
        {dataBtn.map((elem, idx) => (
          <button id={elem} key={idx} onClick={getBtnValue}>
            {elem}
          </button>
        ))}
      </div>
    </>
  );
}

export default Btn;
