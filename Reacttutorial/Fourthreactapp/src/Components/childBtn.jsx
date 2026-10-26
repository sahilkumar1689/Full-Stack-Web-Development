function ParentBtn({ ParentHandler }) {
  return (
    <>
      <button onClick={ParentHandler}>Child Btn</button>
    </>
  );
}

export default ParentBtn;
