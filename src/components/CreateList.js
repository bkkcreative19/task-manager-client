import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/context";
import { withRouter } from "react-router-dom";

const CreateList = (props) => {
  const {
    createNewList,
    listName,
    setListName,
    listId,
    setListId,
  } = useContext(Context);
  // const [listName, setListName] = useState("");
  // const [listId, setListId] = useState("");

  const handleCreateNewList = async (e) => {
    e.preventDefault();
    const res = await createNewList(listName, props);
    setListId(res._id);
    props.history.push(`/lists/${res._id}`);
  };

  useEffect(() => {
    // props.history.push(`/lists/${listId}`);
  }, [listId]);
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
