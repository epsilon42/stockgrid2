import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../../Auth";
import MainContent from "../MainContent/MainContent.component";
import Sidebar from "../Sidebar/Sidebar.component";

import "./PortfolioView.style.scss";
import PortfolioTiles from "../PortfolioTiles/PortfolioTiles.component";
import PortfolioTitle from "../PortfolioTitle/PortfolioTitle.component";

const PortfolioDoesNotExist = () => <div>Portfolio does not exist</div>;

const PortfolioView = ({ match }) => {
  const { portfolioContents, currentUser } = useContext(AuthContext);
  const { portfolioSlug } = match.params;
  return (
    <>
      <Sidebar />
      <MainContent>
        <div className="PortfolioView">
          {!currentUser && (
            <div>You must be signed in to view your portfolios</div>
          )}
          {portfolioContents && portfolioContents[portfolioSlug] && (
            <>
              <PortfolioTitle portfolioSlug={`${portfolioSlug}`} />
              <PortfolioTiles portfolioSlug={`${portfolioSlug}`} />
            </>
          )}
          {portfolioContents && !portfolioContents[portfolioSlug] && (
            <PortfolioDoesNotExist />
          )}
        </div>
      </MainContent>
    </>
  );
};

export default withRouter(PortfolioView);
