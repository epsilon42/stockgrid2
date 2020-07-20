import React, { useCallback, useContext, useState } from "react";
import { withRouter } from "react-router";
import app, { createUserProfileDocument } from "../../firebase/firebase";
import { AuthContext } from "../../Auth";
import MainContent from "../MainContent/MainContent.component";
import Logo from "../Logo/Logo.component";
import "./SignUp.style.scss";
import { ReactComponent as Image } from "../../images/undraw_researching_22gp.svg";

const SignUp = ({ history }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    displayName: ""
  });

  const { setIsDoingStuff } = useContext(AuthContext);

  const handleChange = e => {
    // console.log(e.target.value);
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      // const { email, password, displayName } = event.target.elements;
      // console.log("displayName.value: ", displayName.value);
      try {
        setIsDoingStuff(true);
        await app
          .auth()
          .createUserWithEmailAndPassword(
            credentials.email,
            credentials.password
          )
          .then(async result => {
            await createUserProfileDocument(result.user, {
              displayName: credentials.displayName,
              portfolioKeys: []
            });
            // console.log(result);
          });
        setIsDoingStuff(false);
        history.push("/dashboard");
      } catch (error) {
        alert(error);
      }
    },
    [history, setIsDoingStuff, credentials]
  );

  return (
    <MainContent>
      <div className="SignUp">
        <div className="Image">
          <Image />
        </div>
        <div className="SignInSignUp">
          <Logo noLink noVersion />
          <p className="subtext">Sign Up</p>
          <form className="Form" onSubmit={handleSignUp}>
            <div>
              <input
                className={`${
                  credentials.displayName.length ? "not-empty" : ""
                }`}
                id="displayName"
                name="displayName"
                type="text"
                onChange={handleChange}
                value={credentials.displayName}
              />
              <label htmlFor="displayName">Display Name</label>
            </div>
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
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </MainContent>
  );
};

export default withRouter(SignUp);
