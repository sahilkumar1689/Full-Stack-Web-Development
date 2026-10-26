function ListItems({ Data, ind, bought, clickHandler }) {
  return (
    <>
      <li className={bought ? "active" : undefined}>
        <span>{Data}</span>
        <button
          className="buyBtn"
          onClick={() => {
            console.log(ind + " clicked");
            clickHandler(ind);
          }}
        >
          Buy
        </button>
      </li>
    </>
  );
}

export default ListItems;
