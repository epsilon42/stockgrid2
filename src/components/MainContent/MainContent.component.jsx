import React from "react";

import "./MainContent.style.scss";

const MainContent = ({ children }) => (
  <div className="MainContent" id="MainContent">
    {children}
  </div>
);

export default MainContent;
