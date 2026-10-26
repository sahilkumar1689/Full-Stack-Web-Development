function InputItems({ inputHandler }) {
  return (
    <>
      <input
        type="text"
        placeholder="Enter New Items:"
        className="NewItemsInput"
        onKeyDown={inputHandler}
      />
    </>
  );
}

export default InputItems;
