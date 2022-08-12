import React from "react";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
import "./index.css";
const App = () => {
  return (
    <div className="todo">
      <div className="container">
        <div className="todo-inner">
          <h2>Todo</h2>
          <Form/>
          <TodoList/>
        </div>
      </div>
    </div>
  );
};

export default App;
