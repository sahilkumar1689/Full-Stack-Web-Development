function Container({ tempData1, tempData2, tempData3, children }) {
  return (
    <>
      <br />
      <span>{tempData1}</span>
      <br />
      <span>{tempData2}</span>
      <br />
      <span>{tempData3}</span>
      <br />
      <span>{children}</span>
    </>
  );
}

export default Container;
