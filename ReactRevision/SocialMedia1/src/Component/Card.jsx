import React from "react";
import { MdDelete } from "react-icons/md";

function Card({ itemsObj, getDeleteIdx }) {
  return (
    <>
      <div
        className="card"
        style={{
          width: "18rem",
          height: "300px",
          overflow: "scroll",
          scrollbarWidth: "none",
        }}
      >
        <div className="card-body" style={{ position: "relative" }}>
          <MdDelete
            style={{
              position: "absolute",
              right: 5,
              top: 5,
              fontSize: "30px",
            }}
            onClick={getDeleteIdx}
          />
          <h4 className="card-title" style={{ marginBottom: "16px" }}>
            {itemsObj.title}
          </h4>
          <p
            className="card-text"
            style={{ fontSize: "14px", textAlign: "justify" }}
          >
            {itemsObj.body}
          </p>
          {itemsObj.tags.map((hash, idx) => {
            return (
              <a
                href="#"
                key={idx}
                className="btn btn-primary"
                style={{
                  marginLeft: "5px",
                  padding: "5px 10px",
                  fontSize: "12px",
                }}
              >
                {hash}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Card;
