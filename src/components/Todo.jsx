import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [inputText, setInputText] = useState("");
  const [tasks, setTask] = useState([]);
  const [editInput, setEditInput] = useState(null);

  const handleAdd = (e) => {
    e.preventDefault();

    if (!inputText.trim()) return;

    if (editInput !== null) {
      // for edit data
      const updateTask = tasks.map((task) =>
        task.id === editInput ? { ...task, text: inputText } : task
      );
      setTask(updateTask);
      setEditInput(null);
      setInputText("");
    } else {
      // for add data
      setTask([
        ...tasks,
        { id: Date.now(), text: inputText },
      ]);
      setInputText("");
    }
  };

  const handleEdit = (task) => {
    setInputText(task.text);
    setEditInput(task.id);
  };

  const handleDelete = (index) => {
    setTask(tasks.filter((_, taskIndex) => taskIndex !== index));
  };

  return (
    <div>
      <form onSubmit={handleAdd} action="">
        <h1>Todo List</h1>
        <div className="container">
          <input
            className="input"
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button onClick={handleAdd} type="submit">
            {editInput !== null ? "update" : "Add"}
          </button> 
        </div>
      </form>

      <div className="listData">
        <div className="listData-content">
          {tasks.map((task, index) => (
            <div className="listData-content" key={task.id}>
              <p className="text-para">{task.text}</p>
              <button onClick={() => handleEdit(task)}>✒️</button>
              <button onClick={() => handleDelete(index)}>❌</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
