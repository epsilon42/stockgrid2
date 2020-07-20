import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
// import { AuthContext } from "../../Auth";
import { getStockDataFromApi } from "../../utils/getStockDataFromApi";
import { getHistoricalDataFromApi } from "../../utils/getHistoricalDataFromApi";
import { getIntradayDataFromApi } from "../../utils/getIntradayDataFromApi";
// import intradayDataFromApi from "./bhp-intraday-1m-7d-new.json";

import MainContent from "../MainContent/MainContent.component";
import Sidebar from "../Sidebar/Sidebar.component";
import SymbolTitle from "../SymbolTitle/SymbolTitle.component";
import SymbolBody from "../SymbolBody/SymbolBody.component";
import SymbolStats from "../SymbolStats/SymbolStats.component";
import SymbolGraph from "../SymbolGraph/SymbolGraph.component";

import "./SymbolView.style.scss";
// import PortfolioTiles from "../PortfolioTiles/PortfolioTiles.component";
// import PortfolioTitle from "../PortfolioTitle/PortfolioTitle.component";

// const SymbolDoesNotExist = () => <div>Symbol does not exist</div>;

const SymbolView = ({ match, location }) => {
  // const { currentUser } = useContext(AuthContext);

  const { symbol } = match.params;
  // const symbol = "BHP.AX";

  const [stockInfo, setStockInfo] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const [intradayData, setIntradayData] = useState(null);

  useEffect(() => {
    // If stockInfo props exist (i.e. user arrives here from StockTiles and not directly to URL)
    if (location && location.state && location.state.stockInfo) {
      // Use stockInfo from props
      setStockInfo(location.state.stockInfo);
    } else {
      // If stockInfo props doesn't exist, then user must have arrived at route directly
      // Fetch stock info from API
      (async () => {
        let apiData = await getStockDataFromApi([`${symbol}.AX`]);
        console.log("is fetching stockdata from api");
        setStockInfo(apiData[0]);
      })();
    }

    // Get historical data for symbol
    (async () => {
      let apiHistoricalData = await getHistoricalDataFromApi(`${symbol}.AX`);
      // console.log("is fetching historical data from api");
      // console.log(apiHistoricalData);
      setHistoricalData(apiHistoricalData);
    })();

    // Get intraday data for symbol
    (async () => {
      let apiIntradayData = await getIntradayDataFromApi(`${symbol}.AX`);
      // console.log("is fetching intraday data from api");
      // console.log(apiIntradayData);
      setIntradayData(apiIntradayData);
    })();

    // setIntradayData(intradayDataFromApi);
    // console.log(intradayDataFromApi);
  }, [setStockInfo, location, symbol]);

  return (
    <>
      <Sidebar />
      <MainContent>
        <div className="SymbolView">
          <div className="SymbolViewHeader">
            <SymbolTitle symbol={symbol} name={stockInfo && stockInfo.name} />
          </div>
          <SymbolBody>
            <SymbolGraph
              historicalData={historicalData}
              intradayData={intradayData}
            />
            <SymbolStats stockInfo={stockInfo} />
          </SymbolBody>
        </div>
      </MainContent>
    </>
  );
};

export default withRouter(SymbolView);
