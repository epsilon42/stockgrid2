import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router";
import { AuthContext } from "../../Auth";

import { GoX } from "react-icons/go";
import "./DeletePortfolioModal.style.scss";
import { deletePortfolioOnFirebase } from "../../firebase/firebase";

const DeletePortfolioModal = ({
  toggleModal,
  portfolioSlug,
  portfolioContents,
  history
}) => {
  const name = portfolioContents[portfolioSlug].name;
  const key = portfolioContents[portfolioSlug].key;
  const owner = portfolioContents[portfolioSlug].owner;

  const { setPortfolioContents, portfolioKeys, setPortfolioKeys } = useContext(
    AuthContext
  );
  // console.log(portfolioContents);
  // console.log(portfolioContents[portfolioSlug]);

  const handleDeletePortfolio = async () => {
    deletePortfolioOnFirebase(key, owner);

    const newPortfolioContents = Object.keys(portfolioContents).reduce(
      (object, key) => {
        if (key !== portfolioSlug) {
          object[key] = portfolioContents[key];
        }
        return object;
      },
      {}
    );
    setPortfolioContents(newPortfolioContents);

    const newPortfolioKeys = portfolioKeys.filter(item => item !== key);
    setPortfolioKeys(newPortfolioKeys);

    history.push(`/dashboard`);
  };

  return ReactDOM.createPortal(
    <div className={`DeletePortfolio`}>
      <div className="Modal">
        <div className="InnerModal">
          <span className={`CloseModal`}>
            <GoX onClick={toggleModal} />
          </span>
          <div className="Title">
            Confirm delete <span>{name}</span>?
          </div>
          <div className="BottomButtons">
            <button className="Cancel" onClick={toggleModal}>
              Cancel
            </button>
            <button
              onClick={handleDeletePortfolio}
              className={`Delete this portfolio`}
            >
              Delete portfolio
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("MainContent")
  );
};

export default withRouter(DeletePortfolioModal);
