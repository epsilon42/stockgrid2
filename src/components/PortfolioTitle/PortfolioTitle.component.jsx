import React, { useContext } from "react";
import { AuthContext } from "../../Auth";

import "./PortfolioTitle.style.scss";

const PortfolioTitle = ({ portfolioSlug }) => {
  const { portfolioContents } = useContext(AuthContext);

  return (
    <div className="PortfolioTitle">
      {portfolioContents && portfolioContents[portfolioSlug].name}
    </div>
  );
};

export default PortfolioTitle;
