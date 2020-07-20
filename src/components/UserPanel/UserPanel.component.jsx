import React, { useContext } from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import app from "../../firebase/firebase";
import { AuthContext } from "../../Auth";

import {
  GoPerson,
  // GoGear,
  // GoCommentDiscussion,
  // GoBell,
  GoSignIn,
  GoSignOut
} from "react-icons/go";

const UserPanel = ({ history }) => {
  const { currentUser, displayName } = useContext(AuthContext);

  const MembersMenu = () => (
    <div>
      <div className="title">Logged in as {displayName && displayName}</div>
      <ul>
        {/* <li>
          <a className="disabled" href="#/">
            <GoPerson />
            Profile
          </a>
        </li>
        <li>
          <a className="disabled" href="#/">
            <GoGear />
            Settings
          </a>
        </li>
        <li>
          <a className="disabled" href="#/">
            <GoCommentDiscussion />
            Messages
          </a>
        </li>
        <li>
          <a className="disabled" href="#/">
            <GoBell />
            Notifications
          </a>
        </li> */}
        <li>
          <a
            href="/signout"
            onClick={e => {
              e.preventDefault();
              app.auth().signOut();
              history.push("/");
            }}
          >
            <GoSignOut />
            Sign Out
          </a>
        </li>
      </ul>
    </div>
  );

  const GuestMenu = () => (
    <div>
      <div className="title">Sign In & Register</div>
      <ul>
        <li>
          <NavLink to="/signin">
            <GoSignIn />
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink to="/register">
            <GoPerson />
            Register
          </NavLink>
        </li>
      </ul>
    </div>
  );

  return (
    <section className="UserPanel">
      {currentUser ? <MembersMenu /> : <GuestMenu />}
    </section>
  );
};

export default withRouter(UserPanel);
