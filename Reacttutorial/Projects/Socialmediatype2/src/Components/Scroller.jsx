function Scroller() {
  return (
    <>
      <div className="spinner text-center">
        <div
          className="spinner-border"
          style={{ width: "5rem", height: "5rem", color: "white" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}

export default Scroller;
