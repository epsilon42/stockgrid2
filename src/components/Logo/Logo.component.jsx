import React from "react";
import { Link } from "react-router-dom";

import "./Logo.style.scss";

const Logo = ({ noLink, noVersion }) => (
  <div className="Logo">
    {noLink ? (
      <>
        <span className="stock">Stock</span>
        <span className="grid">Grid</span>
      </>
    ) : (
      <Link to="/dashboard">
        <span className="stock">Stock</span>
        <span className="grid">Grid</span>
      </Link>
    )}
    {!noVersion && <div className="Version">v0.0.2</div>}
  </div>
);
export default Logo;
