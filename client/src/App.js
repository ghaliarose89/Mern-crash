import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TodoList from "./Components/TodoList";
import EditTodo from "./Components/EditTodo";
import CreateTodo from "./Components/CreateTodo";
import Header from "./Components/Header";

function App() {
  return (

    <BrowserRouter>

     <Switch>

      <Route exact path="/" component={TodoList} />
      <Route path="/edit/id" component={EditTodo} />
      <Route path="/create" component={CreateTodo} />
      </Switch>

    </BrowserRouter>

  );
}

export default App;
