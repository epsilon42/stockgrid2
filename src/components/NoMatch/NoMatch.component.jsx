import React from "react";
import { withRouter } from "react-router";
import MainContent from "../MainContent/MainContent.component";
import { ReactComponent as Image } from "../../images/undraw_bear_market_ania.svg";
import Logo from "../Logo/Logo.component";
import "./NoMatch.style.scss";

const NoMatch = ({ history }) => (
  <MainContent>
    <div className="NoMatch">
      <div className="Image">
        <Image />
      </div>
      <div className="SignInSignUp">
        <Logo noLink noVersion />
        <p className="subtext">404: This route does not exist</p>
        <button tabIndex="-1" onClick={() => history.push("/")}>
          Go to homepage
        </button>
      </div>
    </div>
  </MainContent>
);

export default withRouter(NoMatch);
