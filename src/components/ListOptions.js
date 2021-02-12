import React, { useContext } from "react";
import { Context } from "../context/context";
import { withRouter, Link } from "react-router-dom";

const ListOptions = (props) => {
  const { deleteList } = useContext(Context);
  return (
    <section className="list-options">
      <Link to={`/edit-list/${props.history.location.pathname.slice(7)}`}>
        <span>Edit</span>
      </Link>
      <span
        onClick={() => deleteList(props.history.location.pathname.slice(7))}
      >
        Delete
      </span>
    </section>
  );
};

export default withRouter(ListOptions);
