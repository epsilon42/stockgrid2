import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { GoEye, GoGraph, GoPlus } from "react-icons/go";
import { AuthContext } from "../../Auth";

import AddNewPortfolioModal from "../AddNewPortfolioModal/AddNewPortfolioModal.component";

import "./PortfolioList.style.scss";

const renderIcon = icon => {
  if (icon === "watchlist") return <GoEye />;
  if (icon === "portfolio") return <GoGraph />;
  return null;
};

const MyPortfolios = () => {
  const { portfolioContents } = useContext(AuthContext);
  const [modal, setModal] = useState(false);

  // console.log(
  //   Object.keys(portfolioContents).map(key => portfolioContents[key])
  // );

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="title">My Portfolios</div>
      <ul>
        {portfolioContents &&
          Object.keys(portfolioContents)
            .map(key => portfolioContents[key])
            .map(portfolio => (
              <li key={portfolio.slug}>
                <NavLink to={`/portfolios/${portfolio.slug}`}>
                  {renderIcon(portfolio.icon)}
                  {portfolio.name}
                </NavLink>
              </li>
            ))}
      </ul>
      <button className="SidebarButton" onClick={toggleModal}>
        <GoPlus /> Add Portfolio
      </button>
      {modal && <AddNewPortfolioModal toggleModal={toggleModal} />}
    </>
  );
};

// const DefaultPortfolios = () => (
//   <>
//     <div className="title">Default Portfolios</div>
//     <ul>
//       <li>
//         <a className="disabled" href="#/">
//           Today's Gainers
//         </a>
//       </li>
//       <li>
//         <a className="disabled" href="#/">
//           Today's Losers
//         </a>
//       </li>
//       <li>
//         <a className="disabled" href="#/">
//           S&P/ASX 20
//         </a>
//       </li>
//       <li>
//         <a className="disabled" href="#/">
//           S&P/ASX 200
//         </a>
//       </li>
//     </ul>
//   </>
// );

const PortfolioList = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <section className="PortfolioList">
      {currentUser && <MyPortfolios />}
      {/* <DefaultPortfolios /> */}
    </section>
  );
};
export default PortfolioList;
