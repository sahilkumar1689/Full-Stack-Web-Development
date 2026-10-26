import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { itemListActions } from "../Store/ItemsList";
import { bagItemAction } from "../Store/bag";
import Loader from "./Loader";

function Home() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      // console.log("Fetching Start");
      try {
        const response = await fetch("http://localhost:8080/items");
        const data = await response.json();
        dispatch(itemListActions.addServerList(data.items));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      // console.log("Fetching Complete");
      setLoading(false);
    };

    fetchData();
  }, [dispatch]);

  const items = useSelector((store) => store.itemList);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main>
          <div className="items-container">
            {items.map((elem, idx) => (
              <Card
                key={idx}
                item={elem}
                getAddItem={() => {
                  dispatch(bagItemAction.addBagItem(elem));
                }}
              />
            ))}
          </div>
        </main>
      )}
    </>
  );
}

export default Home;
