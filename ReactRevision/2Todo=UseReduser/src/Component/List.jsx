import React, { useRef } from "react";

function List({ name, date, getIdx, isChecked, isClicked }) {
  let checkedStyle = {
    textDecoration: isChecked ? "line-through" : "none",
  };
  let temp = useRef();
  return (
    <>
      <div
        className="row"
        style={{
          width: "40%",
          margin: "16px",
          padding: "10px",
          borderTop: "2px solid black",
        }}
      >
        <div className="col-4" style={checkedStyle}>
          <input
            type="checkbox"
            style={{ marginRight: "16px" }}
            ref={temp}
            onClick={() => isClicked(temp.current.checked)}
          />
          {name}
        </div>
        <div className="col-4" style={checkedStyle}>
          {date}
        </div>
        <div className="col-4">
          <button className="btn btn-danger" onClick={getIdx}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default List;
