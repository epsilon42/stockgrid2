import React, { useState, useEffect, useContext } from "react";
// import ReactDOM from "react-dom";
// import { getMasterStockList } from "../../firebase/firebase";
import { updatePortfolioStocksOnFirebase } from "../../firebase/firebase";
import { AuthContext } from "../../Auth";
// import Fuse from "fuse.js";
import AddNewStocksModal from "../AddNewStocksModal/AddNewStocksModal.component";
import DeleteStocksModal from "../DeleteStocksModal/DeleteStocksModal.component";
import DeletePortfolioModal from "../DeletePortfolioModal/DeletePortfolioModal.component";

import TimeAgo from "react-timeago";

import ClipLoader from "react-spinners/ClipLoader";
import { GoSync, GoTrashcan } from "react-icons/go";

import { getStockDataFromApi } from "../../utils/getStockDataFromApi";

import "./PortfolioTiles.style.scss";
import StockTile from "../StockTile/StockTile.component";

const PortfolioTiles = ({ portfolioSlug }) => {
  const {
    portfolioContents,
    setPortfolioContents,
    isNewPortfolio
    // setIsNewPortfolio
  } = useContext(AuthContext);
  const [stockData, setStockData] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [stocksToDelete, setStocksToDelete] = useState([]);

  useEffect(() => {
    if (!isNewPortfolio) {
      (async () => {
        setStockData(null);
        setModal(false);
        setDeleteModal(false);
        setStocksToDelete([]);
        if (portfolioContents) {
          setLastUpdate(null);
          // console.log(portfolioSlug);
          const userStocks = portfolioContents[portfolioSlug].stocks.sort();
          let apiData = await getStockDataFromApi(userStocks);
          setLastUpdate(Date.now());
          setStockData(apiData);
        }
      })();
    }
  }, [portfolioContents, portfolioSlug, isNewPortfolio]);

  const updateData = () => {
    (async () => {
      setIsUpdating(true);
      setLastUpdate(null);
      const userStocks = portfolioContents[portfolioSlug].stocks.sort();
      let apiData = await getStockDataFromApi(userStocks);
      setLastUpdate(Date.now());
      setStockData(apiData);
      setIsUpdating(false);
    })();
  };

  // Add new stocks modal
  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleDeletePortfolioModal = () => {
    setDeleteModal(!deleteModal);
  };

  const handleAddNewStocks = stocksToAdd => {
    const newStocksList = [
      ...new Set(
        [...portfolioContents[portfolioSlug].stocks, stocksToAdd].flat()
      )
    ];
    // console.log(newStocksList);
    const newState = {
      ...portfolioContents,
      [portfolioSlug]: {
        ...portfolioContents[portfolioSlug],
        stocks: newStocksList
      }
    };
    setPortfolioContents(newState);
    updatePortfolioStocksOnFirebase(
      portfolioContents[portfolioSlug].key,
      newStocksList
    );
    toggleModal();
  };

  const handleDeleteStocks = stocksToDelete => {
    const newStocksList = portfolioContents[portfolioSlug].stocks.filter(
      symbol => !stocksToDelete.includes(symbol)
    );
    const newState = {
      ...portfolioContents,
      [portfolioSlug]: {
        ...portfolioContents[portfolioSlug],
        stocks: newStocksList
      }
    };
    setPortfolioContents(newState);
    updatePortfolioStocksOnFirebase(
      portfolioContents[portfolioSlug].key,
      newStocksList
    );
    setStocksToDelete([]);
  };

  const markForDeletion = stock => {
    const found = stocksToDelete.find(i => i === stock);
    if (!found) {
      setStocksToDelete([...stocksToDelete, stock]);
    }
  };

  const cancelMarkForDeletion = stock => {
    setStocksToDelete(stocksToDelete.filter(item => item !== stock));
  };

  const isMarkedForDeletion = stock => {
    const found = stocksToDelete.find(i => i === stock);
    if (found) {
      return true;
    }
    return false;
  };

  const LoadingContainer = () => (
    <div className="LoadingContainer">
      <span className="LoadingText">
        <ClipLoader color={"#ffffff"} />
      </span>
    </div>
  );

  const Tools = () => (
    <div className="Tools">
      {lastUpdate && (
        <span className="LastUpdated">
          Updated{" "}
          <TimeAgo
            date={lastUpdate}
            formatter={(value, unit, suffix) => {
              if (unit === "second") {
                return "less than a minute ago";
              } else {
                return (
                  value + " " + unit + (value > 1 ? "s" : "") + " " + suffix
                );
              }
            }}
          />
        </span>
      )}
      <span className={`Refresh ${isUpdating ? "is-updating" : ""}`}>
        <GoSync onClick={updateData} />
      </span>
      <span className={`Delete`}>
        <GoTrashcan onClick={toggleDeletePortfolioModal} />
      </span>
    </div>
  );

  return (
    <div className="PortfolioTiles">
      {modal && (
        <AddNewStocksModal
          toggleModal={toggleModal}
          handleAddNewStocks={handleAddNewStocks}
        />
      )}
      {stocksToDelete.length > 0 && (
        <DeleteStocksModal
          stocksToDelete={stocksToDelete}
          handleDeleteStocks={handleDeleteStocks}
          setStocksToDelete={setStocksToDelete}
        />
      )}
      {deleteModal && (
        <DeletePortfolioModal
          toggleModal={toggleDeletePortfolioModal}
          portfolioSlug={portfolioSlug}
          portfolioContents={portfolioContents}
        />
      )}
      <Tools />
      {!stockData ? (
        <LoadingContainer />
      ) : (
        [
          stockData.map(stock => (
            <StockTile
              key={stock.symbol}
              stockInfo={stock}
              markForDeletion={markForDeletion}
              cancelMarkForDeletion={cancelMarkForDeletion}
              isMarkedForDeletion={isMarkedForDeletion(stock.symbol)}
            />
          )),
          <StockTile
            key="addNewStock"
            type="addNewStock"
            toggleModal={toggleModal}
          />
        ]
      )}
      {/* {stockData &&
        stockData.length <= 0 &&
        "There are no stocks in this portfolio"} */}
    </div>
  );
};

export default PortfolioTiles;
