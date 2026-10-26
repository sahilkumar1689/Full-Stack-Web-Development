function Li({ TaskName, TaskDate, getIndex }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-5">{TaskName}</div>
          <div className="col col-4">{TaskDate}</div>
          <div className="col col-3">
            <button className="btn btn-danger" onClick={getIndex}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Li;
