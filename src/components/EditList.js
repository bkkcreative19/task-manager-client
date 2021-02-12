import React, { useContext, useState } from "react";
import { Context } from "../context/context";
import { withRouter } from "react-router-dom";

const EditList = (props) => {
  const { updateList } = useContext(Context);
  const [editList, setEditList] = useState("");
  const handleUpdateList = async (e) => {
    e.preventDefault();
    await updateList(props.match.params.id, editList);
    props.history.push(`/lists/${props.match.params.id}`);
  };

  return (
    <div className="create-list">
      <form onSubmit={handleUpdateList} className="create-list__form">
        <label htmlFor="create-list">Edit List</label>
        <input
          onChange={(e) => setEditList(e.target.value)}
          type="text"
          placeholder="Enter List Name..."
        />
        <div className="create-list__form-btns">
          <button className="create-list__form-btns cancel">Cancel</button>
          <button className="create-list__form-btns create">Save</button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(EditList);
