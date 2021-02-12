import React, { useContext, useEffect } from "react";
import "./App.scss";
import { Switch, Route, withRouter } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import CreateList from "./components/CreateList";
import CreateTask from "./components/CreateTask";
import Register from "./pages/Register";
import { Context } from "./context/context";
import EditList from "./components/EditList";
import EditTask from "./components/EditTask";

function App(props) {
  const { isSignedIn, setCurrentList } = useContext(Context);

  return (
    <div className="app">
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/">
          {isSignedIn ? <Main /> : <Register />}
        </Route>
        {/* <Route path="/register" component={Register} /> */}
        <Route exact path="/login" component={Login} />
        <Route path="/lists" component={Main} />
        <Route exact path="/new-list" component={CreateList} />
        <Route exact path="/edit-list/:id" component={EditList} />
        <Route exact path="/edit-task/:listId/:taskId" component={EditTask} />
        <Route exact path="/list/:id/new-task" component={CreateTask} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
