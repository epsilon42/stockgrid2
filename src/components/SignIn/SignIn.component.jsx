import React, { useCallback, useState } from "react";
import { withRouter } from "react-router";
import app from "../../firebase/firebase";
import MainContent from "../MainContent/MainContent.component";
import Logo from "../Logo/Logo.component";
import "./SignIn.style.scss";
import { ReactComponent as Image } from "../../images/undraw_financial_data_es63.svg";

const SignIn = ({ history }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    // console.log(e.target.value);
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(credentials.email, credentials.password);
        history.push("/dashboard");
      } catch (error) {
        alert(error);
      }
    },
    [history, credentials]
  );

  return (
    <MainContent>
      <div className="SignIn">
        <div className="Image">
          <Image />
        </div>
        <div className="SignInSignUp">
          <Logo noLink noVersion />
          <p className="subtext">Sign In</p>
          <form className="Form" onSubmit={handleLogin}>
            <div>
              <input
                className={`${credentials.email.length ? "not-empty" : ""}`}
                id="email"
                name="email"
                type="email"
                value={credentials.email}
                onChange={handleChange}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div>
              <input
                className={`${credentials.password.length ? "not-empty" : ""}`}
                id="password"
                name="password"
                type="password"
                value={credentials.password}
                onChange={handleChange}
              />
              <label htmlFor="password">Password</label>
            </div>
            <button
              type="button"
              tabIndex="-1"
              onClick={() => history.push("/")}
            >
              Cancel
            </button>
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </MainContent>
  );
};
export default withRouter(SignIn);
