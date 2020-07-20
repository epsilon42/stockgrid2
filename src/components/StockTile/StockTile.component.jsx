import React from "react";
import { withRouter } from "react-router-dom";
import {
  GoArrowUp,
  GoArrowDown,
  GoPlus,
  GoTrashcan,
  GoX
} from "react-icons/go";

import "./StockTile.style.scss";

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

const StockTile = ({
  stockInfo,
  type,
  toggleModal,
  markForDeletion,
  cancelMarkForDeletion,
  isMarkedForDeletion,
  history
}) => {
  // console.log(stockInfo);
  if (stockInfo) {
    const { symbol, name, day_change, price, change_pct } = stockInfo;
    return (
      <div
        className={`StockTile ${isMarkedForDeletion ? "marked" : ""}`}
        // onClick={() => console.log(stockInfo)}
        // onClick={() => console.log(isMarkedForDeletion)}
        onClick={() =>
          history.push({
            pathname: `/stocks/${symbol.slice(0, -3)}`,
            state: { stockInfo }
          })
        }
      >
        <div className="StockCode">{symbol.slice(0, -3)}</div>
        <div className="StockName">{name}</div>
        <div className="Price">${price}</div>
        <div className={`DayChange ${priceChangeColor(day_change)}`}>
          {priceChangeIcon(day_change)}${Math.abs(day_change).toFixed(2)}
        </div>
        <div className={`DayChangePercent ${priceChangeColor(change_pct)}`}>
          {priceChangeIcon(change_pct)}
          {Math.abs(change_pct).toFixed(2)}%
        </div>
        {!isMarkedForDeletion && (
          <div
            className="DeleteStock"
            onClick={e => {
              e.stopPropagation();
              markForDeletion(symbol);
            }}
          >
            <span className="text">Delete</span>
            <GoTrashcan />
          </div>
        )}
        {isMarkedForDeletion && (
          <div
            className="DeleteStock"
            onClick={e => {
              e.stopPropagation();
              cancelMarkForDeletion(symbol);
            }}
          >
            <span className="text">Cancel Delete</span>
            <GoX />
          </div>
        )}
      </div>
    );
  }
  if (type === "addNewStock") {
    return (
      <div className="StockTile AddNewStock" onClick={toggleModal}>
        <div className="Text">Add stocks</div>
        <div className="Icon">
          <GoPlus />
        </div>
      </div>
    );
  }
};

export default withRouter(StockTile);
