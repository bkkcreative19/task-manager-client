import React, { useEffect, useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import { Context } from "../context/context";
import ListOptions from "./ListOptions";

const Tasks = (props) => {
  const { deleteTask, tasks, getTasks } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (props.history.location.pathname.slice(7)) {
      getTasks(props.history.location.pathname.slice(7));
    } else {
      return;
    }
  }, [tasks.length, props.history.location.pathname.slice(7)]);

  const markComplete = () => {
    setIsComplete(!isComplete);
  };

  const handleGoToEdit = (taskId) => {
    props.history.push(
      `/edit-task/${props.history.location.pathname.slice(7)}/${taskId}`
    );
  };

  return (
    <div className="tasks">
      <div className="tasks__head">
        <h3>Tasks</h3>
        <i onMouseOver={(e) => setIsOpen(!isOpen)} className="fas fa-cog"></i>
        {isOpen ? <ListOptions /> : ""}
      </div>
      <div className="tasks__body">
        {tasks.length === 0 ? (
          <p>
            There are not tasks here! Click the add button to create a new task.
          </p>
        ) : (
          tasks.map((task) => {
            return (
              <div className="tasks__body-task" key={task._id}>
                <h3
                  className={isComplete ? "complete" : ""}
                  onClick={markComplete}
                >
                  {task.title}
                </h3>
                <div className="tasks__body-task-options">
                  <i
                    onClick={() => handleGoToEdit(task._id)}
                    className="fas fa-edit"
                  ></i>
                  <i
                    onClick={() =>
                      deleteTask(
                        props.history.location.pathname.slice(7),
                        task._id
                      )
                    }
                    className="fas fa-trash"
                  ></i>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="tasks__footer">
        <i
          onClick={() =>
            props.history.push(
              `/list/${props.history.location.pathname.slice(7)}/new-task`
            )
          }
          className="fas fa-plus"
        ></i>
      </div>
    </div>
  );
};

export default withRouter(Tasks);
