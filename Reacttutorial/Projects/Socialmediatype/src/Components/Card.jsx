import { MdOutlineDelete } from "react-icons/md";
function Card({ cardData, getDeleteIndex }) {
  return (
    <>
      <div
        className="card"
        style={{
          width: "18rem",
          border: "2px solid #797979",
          height: "250px",
          backgroundColor: "#393939",
          overflow: "scroll",
          scrollbarWidth: "none",
          padding: "10px",
        }}
      >
        <MdOutlineDelete className="deleteBucket" onClick={getDeleteIndex} />
        <div className="card-body">
          <h4
            className="card-title"
            style={{ color: "white", fontSize: "25px" }}
          >
            {cardData.title}
          </h4>
          <h6
            className="card-subtitle mb-2"
            style={{ color: "white", opacity: "0.5" }}
          >
            Reactions: {cardData.reactions}
          </h6>
          <p className="card-text" style={{ color: "white" }}>
            {cardData.body}
          </p>
          <div className="hashtagContainer">
            {cardData.tags.map((elem, index) => {
              return (
                <a
                  href="#"
                  className="card-link"
                  key={index}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    backgroundColor: "#0D6EFD",
                    padding: "3px 10px",
                    borderRadius: "20px",
                    fontSize: "12px",
                  }}
                >
                  {elem}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
