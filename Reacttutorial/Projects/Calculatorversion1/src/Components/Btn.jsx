function Btn({ Data, getChildClickedData }) {
  return (
    <>
      <div className="btn" onClick={getChildClickedData}>
        <span>{Data}</span>
      </div>
    </>
  );
}

export default Btn;
