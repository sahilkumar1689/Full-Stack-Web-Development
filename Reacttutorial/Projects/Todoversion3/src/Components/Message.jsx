function Message({ dataArr }) {
  return (
    dataArr.length == 0 && (
      <p className="emptyMessage">No Work Left Enjoy Yourday.</p>
    )
  );
}

export default Message;
