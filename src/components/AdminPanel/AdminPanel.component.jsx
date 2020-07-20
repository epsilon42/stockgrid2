import React from "react";
import { updateMasterStockList } from "../../firebase/firebase";
import data from "../../utils/asxlist-skinny";

const handleClick = e => {
  e.preventDefault();
  updateMasterStockList(data);
};

const AdminPanel = () => {
  return (
    <section>
      <div className="title">Admin Controls</div>
      <ul>
        <li>
          <a href="#/" onClick={handleClick}>
            Update Master Stock List on Firebase
          </a>
        </li>
      </ul>
    </section>
  );
};

export default AdminPanel;
