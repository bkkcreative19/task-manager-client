import React, { useContext, useEffect } from "react";
import { Context } from "../context/context";
import { withRouter } from "react-router-dom";

const Lists = (props) => {
  const { lists, getLists } = useContext(Context);

  useEffect(() => {
    getLists();
  }, [lists.length]);

  const handleClick = (item) => {
    props.history.push(`/lists/${item._id}`);
  };

  return (
    <section className="lists">
      <h2 className="lists__head">Lists</h2>
      <ul className="lists__list">
        {lists.map((listItem) => {
          return (
            <li
              onClick={() => handleClick(listItem)}
              className={
                listItem._id === props.history.location.pathname.slice(7)
                  ? "lists__list-item active"
                  : "lists__list-item"
              }
              key={listItem._id}
            >
              {listItem.title}
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => props.history.push("/new-list")}
        className="lists__btn"
      >
        + New List
      </button>
    </section>
  );
};

export default withRouter(Lists);
