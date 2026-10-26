import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagItemAction } from "../Store/bag";

function Card({ item, getAddItem }) {
  const bagList = useSelector((store) => store.bagItem);

  const dispatch = useDispatch();

  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {bagList.some((bagItem) => bagItem.id === item.id) ? (
          <button
            className="btn-add-bag"
            style={{ backgroundColor: "red" }}
            onClick={() => dispatch(bagItemAction.deleteBagItem(item.id))}
          >
            Remove From Cart
          </button>
        ) : (
          <button className="btn-add-bag" onClick={getAddItem}>
            Add to Cart
          </button>
        )}
      </div>
    </>
  );
}

export default Card;
