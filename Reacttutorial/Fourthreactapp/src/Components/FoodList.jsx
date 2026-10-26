import { useState } from "react";
import ListItems from "./ListItems";

function FoodList({ foodItemsData }) {
  let [boughtItems, changeBoughtItems] = useState([]);

  return (
    <>
      <ul>
        {foodItemsData.map((elem, index) => (
          <ListItems
            key={elem}
            Data={elem}
            ind={index}
            bought={boughtItems.includes(index)}
            clickHandler={(childInd) =>
              changeBoughtItems([...boughtItems, childInd])
            }
          ></ListItems>
        ))}
      </ul>
    </>
  );
}

export default FoodList;
