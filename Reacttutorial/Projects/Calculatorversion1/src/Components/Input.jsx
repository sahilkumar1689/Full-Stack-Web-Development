function Input({ displayInputVal }) {
  return (
    <>
      <div className="inputContainer">
        <input type="text" placeholder="0" value={displayInputVal} readOnly />
      </div>
    </>
  );
}
export default Input;
