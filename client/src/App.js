import React, {component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {TodoList} from "./Components/TodoList";
import {EditTodo} from "./Components/EditTodo";
import {createTodo} from "./Components/CreateTodo";

function App() {
  return (
    <div className="container">
    <Router>
   
   <h2> Mern ToDo App
   </h2>
   <Route path ="/" component={TodoList} />
   <Route path ="/edit/id" component={EditTodo} />
   <Route path ="/create" component={createTodo} />
   </Router>
   </div>
  );
}

export default App;
