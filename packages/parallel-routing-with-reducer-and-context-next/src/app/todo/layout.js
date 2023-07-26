"use client";

import { TasksProvider } from "@/context/TasksContext";
export default function TodoLayout({ children, todolist }) {
  return (
    <div>
      <TasksProvider>
        {children}
        {todolist}
      </TasksProvider>
    </div>
  );
}
