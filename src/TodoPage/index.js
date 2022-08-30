import { useState } from "react";
import React, { useEffect } from "react";
import Todo from "../AddTodo";
import "./style.css";
import { notification } from "antd";

const TodoPage = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo) {
      notification.error({
        message: "Input the todo",
      });
      return;
    }

    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        value: todo,
      },
    ]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todoPageWrapper">
      <div className="todoInputWrapper">
        <input
					className=""
          type="text"
          onChange={(event) => {
            setValue(event.target.value);
          }}
          value={value}
          placeholder="Enter Todo"
        />
        <button
          className="todoInputButton"
          onClick={() => {
            addTodo(value);
            setValue("");
          }}
        >
          SUBMIT
        </button>
      </div>
      {todos.length > 0 && <div className="todosWrapper">
        {todos.map((value, index) => {
          return (
            <Todo
              key={index}
              todo={value.value}
              removeTodo={() => removeTodo(value.id)}
            />
          );
        })}
      </div>}
    </div>
  );
};

export default TodoPage;
