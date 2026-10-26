import React from "react";

function BagSummary({ item }) {
  const summaryObj = {
    totalItem: item.length,
    totalMRP: 0,
    totalDiscount: 0,
    ConvenienceFee: 99,
    finalPayment: 0,
  };

  // Calculating Amount:
  item.forEach((elem) => {
    summaryObj.totalMRP += elem.current_price;
    summaryObj.totalDiscount += Math.floor(
      (elem.discount_percentage / 100) * elem.current_price
    );
  });

  summaryObj.finalPayment = Math.floor(
    summaryObj.totalMRP - summaryObj.totalDiscount + summaryObj.ConvenienceFee
  );

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({summaryObj.totalItem} Items){" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{summaryObj.totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{summaryObj.totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹{summaryObj.ConvenienceFee}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{summaryObj.finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
}

export default BagSummary;
