import React, { useContext, useState } from "react";
import "./App.scss";
import { AuthContext } from "./Auth";
import { Switch, Route } from "react-router-dom";
import { GoDeviceMobile, GoX } from "react-icons/go";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.component";
import PortfolioView from "./components/PortfolioView/PortfolioView.component";
import SymbolView from "./components/SymbolView/SymbolView.component";
import SignIn from "./components/SignIn/SignIn.component";
import SignUp from "./components/SignUp/SignUp.component";
import Home from "./components/Home/Home.component";
import Dashboard from "./components/Dashboard/Dashboard.component";
import NoMatch from "./components/NoMatch/NoMatch.component";

const App = () => {
  const { currentUser } = useContext(AuthContext);
  const [mobileModal, setMobileModal] = useState(true);
  // console.log(!!currentUser);

  const MobileModal = () => (
    <div className="MobileModal">
      <div>
        <div className="Icon">
          <div className="GoDeviceMobile">
            <GoDeviceMobile />
          </div>
          <div className="GoX">
            <GoX />
          </div>
        </div>
        <p>
          This site does not currently support smaller screen sizes. Support for
          this will be added in a later version.
        </p>
        <p>Please visit the site from a desktop browser.</p>

        <button onClick={() => setMobileModal(!setMobileModal)}>
          Continue anyway
        </button>
      </div>
    </div>
  );

  return (
    <div className="App" id="App">
      {mobileModal && <MobileModal />}
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/dashboard"
          render={() => (currentUser ? <Dashboard /> : <SignIn />)}
        />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/register" component={SignUp} />
        <Route path="/portfolios/:portfolioSlug" component={PortfolioView} />
        <Route path="/stocks/:symbol" component={SymbolView} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};

export default App;
