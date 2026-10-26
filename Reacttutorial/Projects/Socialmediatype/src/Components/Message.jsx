function Message({ serverDataHandler }) {
  return (
    <>
      <p
        style={{
          color: "grey",
          fontSize: "40px",
          position: "absolute",
          top: "40%",
          left: "50%",
          opacity: "0.5",
        }}
      >
        No Story to Show
      </p>
      <button
        className="btn btn-primary"
        style={{
          backgroundColor: "#585858",
          fontSize: "22px",
          position: "absolute",
          top: "55%",
          left: "55%",
          opacity: "0.8",
          border: "none",
          width: "100px",
        }}
        onClick={serverDataHandler}
      >
        Retry
      </button>
    </>
  );
}

export default Message;
