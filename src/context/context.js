import React, { useState } from "react";
import axios from "axios";

const Context = React.createContext("");

const MyContext = ({ children }) => {
  const [lists, setLists] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [listName, setListName] = useState("");
  const [listId, setListId] = useState("");
  // const [currentList, setCurrentList] = useState("");

  const register = async (data) => {
    const res = await axios.post(
      "https://task-manager-api-mern.herokuapp.com/api/signup",
      {
        email: data.email,
        password: data.password,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    console.log(res);
  };

  const login = async (data, props) => {
    const res = await axios.post(
      "https://task-manager-api-mern.herokuapp.com/api/signin",
      {
        email: data.email,
        password: data.password,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    const headers = res.headers;
    console.log(res);
    localStorage.setItem("accessToken", headers["x-access-token"]);
    localStorage.setItem("refreshToken", headers["x-refresh-token"]);
    setIsSignedIn(true);
    props.history.push("/lists");
  };
  const logout = async (props) => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsSignedIn(false);
    props.history.push("/");
  };

  const getLists = async () => {
    let config = {
      headers: {
        "x-access-token": localStorage.getItem("accessToken"),
      },
    };
    const { data } = await axios.get(
      "https://task-manager-api-mern.herokuapp.com/api/lists",
      config
    );
    setLists(data);
  };

  const getTasks = async (list) => {
    let config = {
      headers: {
        "x-access-token": localStorage.getItem("accessToken"),
      },
    };

    const { data } = await axios.get(
      `https://task-manager-api-mern.herokuapp.com/api/lists/${list}/tasks`,
      config
    );
    setTasks(data);
  };

  const createNewList = async (list, props) => {
    let config = {
      headers: {
        "x-access-token": localStorage.getItem("accessToken"),
      },
    };

    const { data } = await axios.post(
      "https://task-manager-api-mern.herokuapp.com/api/lists",
      {
        title: list,
      },
      config
    );
    props.history.push(`/lists/${data._id}`);
    return data;
  };
  const createNewTask = async (task, listId) => {
    let config = {
      headers: {
        "x-access-token": localStorage.getItem("accessToken"),
      },
    };

    const { data } = await axios.post(
      `https://task-manager-api-mern.herokuapp.com/api/lists/${listId}/tasks`,
      {
        title: task,
      },
      config
    );
    return data;
  };

  const deleteList = async (listId) => {
    let config = {
      headers: {
        "x-access-token": localStorage.getItem("accessToken"),
      },
    };

    const { data } = await axios.delete(
      ` https://task-manager-api-mern.herokuapp.com/api/lists/${listId}`,

      config
    );
    window.location.reload();
    return data;
  };
  const updateList = async (listId, title) => {
    let config = {
      headers: {
        "x-access-token": localStorage.getItem("accessToken"),
      },
    };

    const { data } = await axios.patch(
      ` https://task-manager-api-mern.herokuapp.com/api/lists/${listId}`,
      {
        title,
      },
      config
    );

    return data;
  };

  const deleteTask = async (listId, taskId) => {
    let config = {
      headers: {
        "x-access-token": localStorage.getItem("accessToken"),
      },
    };

    const { data } = await axios.delete(
      ` https://task-manager-api-mern.herokuapp.com/api/lists/${listId}/tasks/${taskId}`,

      config
    );
    window.location.reload();
    return data;
  };
  const updateTask = async (listId, taskId, title) => {
    let config = {
      headers: {
        "x-access-token": localStorage.getItem("accessToken"),
      },
    };

    const { data } = await axios.patch(
      ` https://task-manager-api-mern.herokuapp.com/api/lists/${listId}/tasks/${taskId}`,
      {
        title,
      },
      config
    );
    return data;
  };

  return (
    <Context.Provider
      value={{
        register,
        login,
        getLists,
        logout,
        createNewList,
        updateList,
        getTasks,
        createNewTask,
        deleteTask,
        updateTask,
        lists,
        isSignedIn,
        tasks,
        deleteList,
        listName,
        setListName,
        listId,
        setListId,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { MyContext, Context };
