import React, { useContext, useState } from "react";
import { Context } from "../context/context";
import { withRouter } from "react-router-dom";

const EditTask = (props) => {
  const { updateTask } = useContext(Context);
  const [editTask, setEditTask] = useState("");
  const handleUpdateTask = async (e) => {
    e.preventDefault();
    await updateTask(
      props.match.params.listId,
      props.match.params.taskId,
      editTask
    );
    props.history.push(`/lists/${props.match.params.listId}`);
  };

  return (
    <div className="create-list">
      <form onSubmit={handleUpdateTask} className="create-list__form">
        <label htmlFor="create-list">Edit Task</label>
        <input
          onChange={(e) => setEditTask(e.target.value)}
          type="text"
          placeholder="Enter Task Name..."
        />
        <div className="create-list__form-btns">
          <button className="create-list__form-btns cancel">Cancel</button>
          <button className="create-list__form-btns create">Save</button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(EditTask);
