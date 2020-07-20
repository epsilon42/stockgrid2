import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { getMasterStockList } from "../../firebase/firebase";
import Fuse from "fuse.js";
import { GoX, GoPlus, GoInfo } from "react-icons/go";
import "./AddNewStocksModal.style.scss";

const AddNewStocksModal = ({ toggleModal, handleAddNewStocks }) => {
  const [query, setQuery] = useState("");
  const [masterList, setMasterList] = useState([]);
  const [toAddList, setToAddList] = useState([]);

  const onChange = e => {
    setQuery(e.target.value);
  };

  const handleAddToList = item => {
    const found = toAddList.find(i => i === item.symbol);
    if (!found) {
      setToAddList([...toAddList, item.symbol]);
    }
    setQuery("");
  };

  const handleRemoveFromList = symbol => {
    setToAddList(toAddList.filter(item => item !== symbol));
  };

  useEffect(() => {
    (async () => {
      const masterStockListFromFirebase = await getMasterStockList();
      // console.log(masterStockListFromFirebase);
      setMasterList(masterStockListFromFirebase);
      // console.log(masterStockList);
    })();
  }, []);

  var options = {
    shouldSort: true,
    threshold: 0.33,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 2,
    keys: [
      {
        name: "symbol",
        weight: 0.7
      },
      {
        name: "name",
        weight: 0.3
      }
    ]
  };
  var fuse = new Fuse(masterList, options);
  const data = query.length >= 2 ? fuse.search(query) : [];

  return ReactDOM.createPortal(
    <div className={`AddNewStocks`}>
      <div className="Modal">
        <div className="InnerModal">
          <span className={`CloseModal`}>
            <GoX onClick={toggleModal} />
          </span>
          <div className="Title">Add stocks to this portfolio...</div>
          <input
            type="text"
            placeholder="Enter a stock code or company name"
            className="StockSearch"
            value={query}
            onChange={onChange}
          />
          <div className="ResultContainer">
            {data.length > 0 && (
              <ul className="Result">
                <span className="Instructions">
                  <GoInfo /> Select an item from the results below to add it to
                  your list
                </span>
                {data.slice(0, 25).map(item => {
                  return (
                    <li
                      className="ResultItem"
                      key={item.symbol}
                      onClick={() => handleAddToList(item)}
                    >
                      <span className="Symbol">{item.symbol.slice(0, -3)}</span>
                      <span className="Name">{item.name}</span>
                      <span className="AddToList">
                        Add to list <GoPlus />
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <div className="ListOfStocksToAdd">
            {toAddList.length
              ? "Stocks to be added:"
              : "Use the search field above to add stocks to your portfolio"}

            <ul className="List">
              {toAddList.map(item => (
                <li
                  className="Item"
                  key={item}
                  onClick={() => handleRemoveFromList(item)}
                >
                  {item.slice(0, -3)} <GoX />
                </li>
              ))}
            </ul>
          </div>
          <div className="BottomButtons">
            <button className="Cancel" onClick={toggleModal}>
              Cancel
            </button>
            <button
              className={`Confirm ${toAddList.length <= 0 ? "disabled" : ""}`}
              onClick={() => {
                handleAddNewStocks(toAddList);
                // setToAddList([]);  // Not necessary as this gets cleared when modal closes
              }}
            >
              {toAddList.length <= 0 && "No stocks selected"}
              {toAddList.length >= 1 &&
                `Add ${toAddList.length} stock${
                  toAddList.length > 1 ? "s" : ""
                } to portfolio`}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("MainContent")
  );
};

export default AddNewStocksModal;
