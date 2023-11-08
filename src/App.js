import React, { useState, useSyncExternalStore } from "react";
import './App.css';

function App() {
  const [tasks, settasks] = useState([
    {title: "Learn JS", status: 0},
    {title: "Code a Todo List", status: 0},
  ])
  const [showIncomplete, setshowIncomplete] = useState(false);
  const [newTask, setnewTask] = useState("");
  return (
    <div className="container">
      <h1 className="title">
        Todo List
        <span>Get things done, one item at a time.</span>
      </h1>
      <ul className="task-list">
        <li>
          <span className="label">Learn JS</span>
          <div className="actions">
            <input type="checkbox" className="btn-action btn-action-done" />
            <button className="btn-action btn-action-delete">✖</button>
          </div>
        </li>
        <li>
          <span className="label">Code a Todo List</span>
          <div className="actions">
            <input type="checkbox" className="btn-action btn-action-done" />
            <button className="btn-action btn-action-delete">✖</button>
          </div>
        </li>
      </ul>
      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">
          Show incompleted tasks only
        </label>
        <input type="checkbox" id="filter" />
      </div>
      <form action="#" className="form">
        <label htmlFor="newitem">Add to the todo list</label>
        <input type="text" id="newitem" />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default App;
