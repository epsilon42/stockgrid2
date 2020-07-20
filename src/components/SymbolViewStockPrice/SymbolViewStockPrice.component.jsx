import React from "react";
import ReactDOM from "react-dom";
import { GoArrowUp, GoArrowDown } from "react-icons/go";

const priceChangeIcon = priceChange => {
  if (priceChange > 0) {
    return <GoArrowUp />;
  }
  if (priceChange < 0) {
    return <GoArrowDown />;
  }
};

const priceChangeColor = priceChange => {
  if (priceChange > 0) {
    return "up";
  }
  if (priceChange < 0) {
    return "down";
  }
  return "";
};

const SymbolViewStockPrice = ({ price, dayChange, changePercent }) => {
  return ReactDOM.createPortal(
    <>
      <span className="Price">${price}</span>
      <span className={`DayChange ${priceChangeColor(dayChange)}`}>
        {" "}
        {priceChangeIcon(dayChange)}${Math.abs(dayChange).toFixed(2)}
      </span>
      <span className={`DayChangePercent ${priceChangeColor(changePercent)}`}>
        {" "}
        ({Math.abs(changePercent).toFixed(2)}%)
      </span>
    </>,
    document.getElementById("SymbolViewStockPrice")
  );
};

export default SymbolViewStockPrice;
