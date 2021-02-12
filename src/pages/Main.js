import React, { useEffect, useContext } from "react";

import Lists from "../components/Lists";
import Tasks from "../components/Tasks";
import { Context } from "../context/context";

const Main = () => {
  const { lists } = useContext(Context);

  return (
    <div className="main">
      <div className="main__container">
        <Lists />
        {lists.length === 0 ? (
          <span>Please select a list from the sidebar</span>
        ) : (
          <Tasks />
        )}
      </div>
    </div>
  );
};

export default Main;
