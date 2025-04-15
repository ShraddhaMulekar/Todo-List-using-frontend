import React, { useState } from "react";

const Todo = () => {
  const [inputText, setInputText] = useState("");
  const [tasks, setTask] = useState([]);
  const [editInput, setEditInput] = useState(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!inputText.trim() === "") return;

  //   if (editInput === null) {
  //     setTask([...tasks, inputText]);
  //   } else {
  //     setTask(
  //       tasks.map((task, index) => {
  //         return index === editInput ? { ...task, inputText } : task;
  //       })
  //     );
  //     setEditInput(null);
  //   }

  //   setInputText("");
  // };
  // console.log("line28", inputText)
  // console.log("line29", tasks)
  // console.log("line30", editInput)

  const handleAdd = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      setTask([
        ...tasks,
        { id: Date.now(), text: inputText, completed: false },
      ]);
      setInputText("");
    }
  };

  const handleDelete = (index) => {
    setTask(tasks.filter((_,taskIndex) => taskIndex !== index));
  };

  return (
    <div>
      <form onSubmit={handleAdd} action="">
        <h1>Todo List</h1>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={handleAdd} type="submit">
          Add
        </button>
      </form>
      <ul>
        <li>
          {tasks.map((task, index) => (
            <div key={task.id}>
              <p>{task.text}</p>
              <span>{task.completed}</span>
              <button>✒️</button>
              <button onClick={()=>handleDelete(index)}>❌</button>
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default Todo;
