import React from "react";
import { withRouter } from "react-router-dom";

import MainContent from "../MainContent/MainContent.component";

// import { ReactComponent as Image } from "../../images/undraw_finance_0bdk.svg";
import PreviewImage from "../../images/preview.png";
import "./Home.style.scss";
import Logo from "../Logo/Logo.component";

const Home = ({ history }) => (
  <>
    <MainContent>
      <div className="Home">
        <div className="Image">
          {/* <Image /> */}
          <img src={PreviewImage} alt="Preview" />
          {/* <PreviewImage /> */}
        </div>
        <div className="SignInSignUp">
          <Logo noLink noVersion />
          <p className="subtext">A portfolio manager for the ASX</p>
          <button onClick={() => history.push("/register")}>
            Create a new account
          </button>
          <button onClick={() => history.push("/signin")}>Sign In</button>
        </div>
      </div>
    </MainContent>
  </>
);

export default withRouter(Home);
