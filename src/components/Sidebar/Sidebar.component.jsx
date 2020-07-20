import React from "react";

import "./Sidebar.style.scss";
import PortfolioList from "../PortfolioList/PortfolioList.component";
import UserPanel from "../UserPanel/UserPanel.component";
import Logo from "../Logo/Logo.component";
// import AdminPanel from "../AdminPanel/AdminPanel.component";

const Sidebar = () => (
  <div className="Sidebar">
    <Logo />
    <UserPanel />
    <PortfolioList />
    {/* <AdminPanel /> */}
  </div>
);

export default Sidebar;
