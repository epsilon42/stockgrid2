import React from "react";
import ReactDOM from "react-dom";
import "./DeleteStocksModal.style.scss";

const DeleteStocksModal = ({
  stocksToDelete,
  handleDeleteStocks,
  setStocksToDelete
}) => {
  return ReactDOM.createPortal(
    <div className={`DeleteStocksModal`}>
      <div className="Modal">
        <div className="InnerModal">
          <div className="BottomButtons">
            <button className="Cancel" onClick={() => setStocksToDelete([])}>
              Cancel
            </button>
            <button
              className={`Confirm`}
              onClick={() => {
                handleDeleteStocks(stocksToDelete);
              }}
            >
              {stocksToDelete.length >= 1 &&
                `Delete ${stocksToDelete.length} stock${
                  stocksToDelete.length > 1 ? "s" : ""
                } from portfolio`}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("MainContent")
  );
};

export default DeleteStocksModal;
