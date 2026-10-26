import React from "react";
import BagSummary from "./BagSummary";
import BagItems from "./BagItems";
import { useSelector, useDispatch } from "react-redux";
import { bagItemAction } from "../Store/bag";

function Bag() {
  const bagList = useSelector((store) => store.bagItem);

  console.log(bagList);

  let dispatch = useDispatch();

  return (
    <>
      {bagList.length === 0 ? (
        <div
          className="bagMessage"
          style={{ fontSize: "30px", textAlign: "center", margin: "10%" }}
        >
          Not Items In the Cart
        </div>
      ) : (
        <main>
          <div className="bag-page">
            <div className="bag-items-container">
              {bagList.map((elem, idx) => {
                return (
                  <BagItems
                    key={idx}
                    item={elem}
                    deleteItem={() =>
                      dispatch(bagItemAction.deleteBagItem(elem.id))
                    }
                  />
                );
              })}
            </div>
            <BagSummary item={bagList} />
          </div>
        </main>
      )}
    </>
  );
}

export default Bag;
