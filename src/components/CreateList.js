import React, { useContext } from "react";
import { Context } from "../context/context";
import { withRouter } from "react-router-dom";

const CreateList = (props) => {
  const { createNewList, listName, setListName } = useContext(Context);

  const handleCreateNewList = async (e) => {
    e.preventDefault();
    const res = await createNewList(listName, props);

    props.history.push(`/lists/${res._id}`);
  };

  return (
    <div className="create-list">
      <form onSubmit={handleCreateNewList} className="create-list__form">
        <label htmlFor="create-list">Create a New List</label>
        <input
          onChange={(e) => setListName(e.target.value)}
          type="text"
          placeholder="Enter List Name..."
        />
        <div className="create-list__form-btns">
          <button className="create-list__form-btns cancel">Cancel</button>
          <button className="create-list__form-btns create">Create</button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(CreateList);
