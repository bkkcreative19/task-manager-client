import React, { useContext, useState } from "react";
import { Context } from "../context/context";
import { withRouter } from "react-router-dom";

const CreateTask = (props) => {
  const { createNewTask } = useContext(Context);
  const [taskName, setTaskName] = useState("");

  const handleCreateNewTask = async (e) => {
    e.preventDefault();
    const res = await createNewTask(taskName, props.match.params.id);
    props.history.push(`/lists/${res._listId}`);
  };

  return (
    <div className="create-list">
      <form onSubmit={handleCreateNewTask} className="create-list__form">
        <label htmlFor="create-list">Create a New Taskt</label>
        <input
          onChange={(e) => setTaskName(e.target.value)}
          type="text"
          placeholder="Enter Task Name..."
        />
        <div className="create-list__form-btns">
          <button className="create-list__form-btns cancel">Cancel</button>
          <button className="create-list__form-btns create">Create</button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(CreateTask);
