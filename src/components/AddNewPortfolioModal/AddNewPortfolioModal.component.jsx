import React, { useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router";
import {
  addNewPortfolioOnFirebase,
  addPortfolioKeyToUserOnFirebase
} from "../../firebase/firebase";
import slugify from "slugify";
import ClipLoader from "react-spinners/ClipLoader";

import { AuthContext } from "../../Auth";

import { GoX } from "react-icons/go";
import "./AddNewPortfolioModal.style.scss";

const LoadingSpinner = () => (
  <span className="LoadingText">
    <ClipLoader color={"#ffffff"} />
  </span>
);
const AddNewPortfolioModal = ({ toggleModal, history }) => {
  const [portfolioName, setPortfolioName] = useState("");
  const [portfolioNameExists, setPortfolioNameExists] = useState(false);
  const {
    currentUser,
    portfolioContents,
    setPortfolioContents,
    setPortfolioKeys,
    isNewPortfolio,
    setIsNewPortfolio
  } = useContext(AuthContext);

  const onChange = e => {
    setPortfolioName(e.target.value);
  };

  useEffect(() => {
    setPortfolioNameExists(
      !!portfolioContents[slugify(portfolioName.toLowerCase())]
    );
  }, [portfolioName, portfolioContents]);

  const handleAddNewPortfolio = async () => {
    if (!portfolioNameExists) {
      setIsNewPortfolio(true);
      // add portfolio on firebase
      const newFirebasePortfolio = await addNewPortfolioOnFirebase(
        portfolioName,
        currentUser.uid
      );
      // console.log(firebasePortfolioKey);

      // add portfolio to users portfolioKeys on firebase
      // ...
      const newPortfolioKeys = await addPortfolioKeyToUserOnFirebase(
        currentUser.uid,
        newFirebasePortfolio.id
      );

      // console.log(newFirebasePortfolio);

      // add to portfolioKeys
      // ...
      // console.log(newPortfolioKeys);
      setPortfolioKeys(newPortfolioKeys);

      // add to portfolioContents
      const newState = {
        ...portfolioContents,
        [slugify(portfolioName.toLowerCase())]: newFirebasePortfolio.data
      };
      setPortfolioContents(newState);

      toggleModal();

      // setTimeout(() => {
      history.push(`/portfolios/${slugify(portfolioName.toLowerCase())}`);
      // }, 1000);
      setIsNewPortfolio(false);
    }

    // add to portfolioContents
    // push user to new portfolio url
  };

  return ReactDOM.createPortal(
    <div className={`AddNewPortfolio`}>
      <div className="Modal">
        <div className="InnerModal">
          {isNewPortfolio && <LoadingSpinner />}
          <span className={`CloseModal`}>
            <GoX onClick={toggleModal} />
          </span>
          <div className="Title">Add new portfolio...</div>
          <input
            type="text"
            placeholder="Enter the name for your portfolio"
            className="PortfolioName"
            value={portfolioName}
            onChange={onChange}
          />

          <div className="BottomButtons">
            <button className="Cancel" onClick={toggleModal}>
              Cancel
            </button>
            <button
              onClick={handleAddNewPortfolio}
              className={`Confirm ${
                portfolioName.length <= 3 || portfolioNameExists
                  ? "disabled"
                  : ""
              }`}
            >
              Create portfolio
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("MainContent")
  );
};

export default withRouter(AddNewPortfolioModal);
