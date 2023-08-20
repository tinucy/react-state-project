import React, { useState } from "react";

export default function TodoExample() {
  const [todos, setTodos] = useState([
    // array of 3 objects inside the Todo state
    {
      id: 1,
      title: "learn ",
      completed: true,
    },

    {
      id: 2,
      title: "learn redux",
      completed: false,
    },

    {
      id: 3,
      title: "learn react-redux",
      completed: false,
    },
  ]);
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
