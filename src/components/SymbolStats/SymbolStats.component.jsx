import React, { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import abbreviate from "number-abbreviate";
import "./SymbolStats.style.scss";
import SymbolViewStockPrice from "../SymbolViewStockPrice/SymbolViewStockPrice.component";

const SymbolStats = ({ stockInfo }) => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (stockInfo) {
      //   setStats(Object.keys(stockInfo).map(item => [item, stockInfo[item]]));
      setStats(stockInfo);
    }
  }, [stockInfo]);

  //   console.log(stats);
  //   console.log(stockInfo);
  return (
    <div className="SymbolStats">
      {/* <h3>Price</h3> */}
      <div id="SymbolViewStockPrice"></div>
      {/* <h3>Stats</h3> */}
      {stats && (
        <>
          <SymbolViewStockPrice
            price={stats.price}
            dayChange={stats.day_change}
            changePercent={stats.change_pct}
          />
          <ul>
            <li>
              <div>Previous Close</div>
              <div>{stats.close_yesterday}</div>
            </li>
            <li>
              <div>Open</div>
              <div>{stats.price_open}</div>
            </li>
            <li>
              <div>Day's Range</div>
              <div>
                {stats.day_low} <GoArrowRight /> {stats.day_high}
              </div>
            </li>
            <li>
              <div>52-Week Range</div>
              <div>
                {stats["52_week_low"]} <GoArrowRight /> {stats["52_week_high"]}
              </div>
            </li>
            <li>
              <div>Market Cap</div>
              <div>{abbreviate(stats.market_cap, 3)}</div>
            </li>
            <li>
              <div>Volume</div>
              <div>{abbreviate(stats.volume, 3)}</div>
            </li>
            <li>
              <div>Avg. Volume</div>
              <div>{abbreviate(stats.volume_avg, 3)}</div>
            </li>
            <li>
              <div>Shares</div>
              <div>{abbreviate(stats.shares, 3)}</div>
            </li>
            {/* <li>
            <div>Last Trade Time</div>
            <div>{stats.last_trade_time}</div>
          </li> */}
            <li>
              <div>P/E Ratio</div>
              <div>{stats.pe}</div>
            </li>
            <li>
              <div>EPS</div>
              <div>{stats.eps}</div>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default SymbolStats;
