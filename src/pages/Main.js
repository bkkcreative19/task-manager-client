import React, { useContext } from "react";

import Lists from "../components/Lists";
import Tasks from "../components/Tasks";
import { Context } from "../context/context";

const Main = (props) => {
  const { lists, logout } = useContext(Context);

  return (
    <div className="main">
      <div className="main__container">
        <Lists />
        {lists.length === 0 ? (
          <span>Please select a list from the sidebar</span>
        ) : (
          <Tasks />
        )}
        <button className="logout" onClick={() => logout(props)}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Main;
