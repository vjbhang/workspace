"use client";

import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";

export default function ToDoList() {
  console.log("Loading ToDoList");

  return (
    <div style={style}>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}

const style = {
  width: "50vw",
  height: "50vh",
};
