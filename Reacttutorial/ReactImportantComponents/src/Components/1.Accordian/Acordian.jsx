import React, { useState } from "react";
import accordianData from "./data";

function Acordian() {
  const [select, setSelect] = useState(null);
  const [enableMutiSelect, setmutiselect] = useState(false);
  const [mutiSelectArr, setmultiArr] = useState([]);

  const handleMultiArr = (idx)=>{
    let initalMultiArr = [...mutiSelectArr];

    let itemIdx = initalMultiArr.indexOf(idx)
    if(itemIdx === -1){
        initalMultiArr.push(idx);
    }
    else{
        initalMultiArr.splice(itemIdx,1);
    }

    setmultiArr(initalMultiArr);
  }

  return (
    <center style={{ width: "70%", margin: "auto" }}>
      <div>
        <button
          style={{ padding: "10px 20px" }}
          onClick={() => setmutiselect(!enableMutiSelect)}
        >
          {" "}
          {enableMutiSelect ? "Enable" : "Disable"} Multi Select
        </button>
      </div>

      <div className="accordianContainer" style={{ margin: "10px" }}>
        {accordianData.length > 0 ? (
          accordianData.map((elem) => {
            return (
              <div
                className="accordianItem"
                style={{ border: "2px solid black", margin: "10px" }}
              >
                <div
                  key={elem.id}
                  className="accorTitle"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0px 10px",

                    cursor: "pointer",
                  }}
                  onClick={
                    enableMutiSelect
                      ? ()=>handleMultiArr(elem.id)
                      : ()=>setSelect(elem.id !== select ? elem.id : null)
                  }
                >
                  <h2>{elem.question}</h2>
                  <span style={{ fontSize: "25px" }}>+</span>
                </div>
                {enableMutiSelect
                  ? mutiSelectArr.indexOf(elem.id) !== -1 && (
                      <div
                        className="accorBody"
                        style={{
                          "border-top": "2px solid black",
                          textAlign: "left",
                          padding: "10px",
                        }}
                      >
                        {elem.answer}
                      </div>
                    )
                  : select === elem.id && (
                      <div
                        className="accorBody"
                        style={{
                          "borderTop": "2px solid black",
                          textAlign: "left",
                          padding: "10px",
                        }}
                      >
                        {elem.answer}
                      </div>
                    )}
              </div>
            );
          })
        ) : (
          <p>No Accordian To Show</p>
        )}
      </div>
    </center>
  );
}

export default Acordian;
