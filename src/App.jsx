import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  //state to handle todo input box
  const [todoInput, setTodoInput] = useState("");

  function addTodo() {
    //logic

    const todoObj = {
      todoTitle: todoInput,
      isCompleted: false,
      id: Date.now(),
    };

    const newArr = [...todos, todoObj];
    setTodos(newArr);
  }

  function deleteTodo(id) {
    //logic -> to delete todo

    const filteredArray = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(filteredArray);
  }

  function toggleTodo(id) {
    const newUpdatedArray = todos.map((todo) => {
      if (id === todo.id) {
        todo.isCompleted = !todo.isCompleted;
      }

      return todo;
    });

    setTodos(newUpdatedArray);
  }

  return (
    <div>
      <h1>Todo Tracker App</h1>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Enter Todo"
          onChange={(e) => setTodoInput(e.target.value)}
          value={todoInput}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <div className="todo-wrapper">
        {todos.map((todo) => {
          return (
            <div key={todo.id} className="todo-container">
              <input type="checkbox" onChange={() => toggleTodo(todo.id)} />
              <p
                id="todo-item"
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : "none",
                }}
              >
                {todo.todoTitle}
              </p>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
