import React from "react";

import "./SymbolTitle.style.scss";

const SymbolTitle = ({ symbol, name }) => {
  return (
    <div className="SymbolTitle">
      {symbol && symbol}
      {name && <span className="Name">{name}</span>}
      {/* <span id="SymbolViewStockPrice"></span> */}
    </div>
  );
};

export default SymbolTitle;
