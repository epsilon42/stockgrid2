import React, { useContext } from "react";
import Sidebar from "../Sidebar/Sidebar.component";
import MainContent from "../MainContent/MainContent.component";
import { AuthContext } from "../../Auth";
import { GoAlert } from "react-icons/go";
import "./Dashboard.style.scss";

const Dashboard = () => {
  const { displayName } = useContext(AuthContext);
  return (
    <>
      <Sidebar />
      <MainContent>
        <div className="Dashboard">
          <div className="Title">
            Welcome back, <span>{displayName}</span>
          </div>
          <div className="Notice">
            <div className="Icon">
              <GoAlert />
            </div>
            <div className="Message">
              <p>
                This application is an early prototype so you may experience
                unexpected behaviour. It is missing features that will be
                available in the final version.
              </p>
              <p>Some things to note:</p>
              <ul>
                <li>
                  The current API provider doesn't handle prices or movements of
                  less than 1 cent (i.e. it only shows prices and movements to 2
                  decimal places). It also seems to be missing some stock
                  symbols altogether. I'm currently researching options for a
                  more reliable API provider.
                </li>
                <li>
                  There is a limit to the amount of API calls that can be made
                  per day. If price data is not being updated then it is likely
                  that the limit has been reached and you will need to check
                  back tomorrow.
                </li>
                <li>
                  The app is not mobile responsive. This functionality will be
                  added later.
                </li>
                <li>
                  I'm exploring other options for data visualisation on the
                  individual stock page.
                </li>
                <li>
                  You may lose data. Features may be removed or there could be
                  an overhaul of the way the database is structured.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </MainContent>
    </>
  );
};

export default Dashboard;
