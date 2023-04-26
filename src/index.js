import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTaskBtn = () => {
    const newTask = inputRef.current.value;
    setTasks([...tasks, newTask]);
    inputRef.current.value = "";
  };

  const handleTaskClick = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const inputRef = useRef(null);

  return (
    <main className="main-section">
      <AddTask handleAddTaskBtn={handleAddTaskBtn} inputRef={inputRef} />
      <ListOfTasks tasks={tasks} handleTaskClick={handleTaskClick} />
    </main>
  );
}

function AddTask({ handleAddTaskBtn, inputRef }) {
  return (
    <section className="task-container">
      <input
        className="input-box"
        type="text"
        placeholder="Write a task..."
        ref={inputRef}
      />
      <div className="divider">ㅤ</div>
      <button className="btn-add-task" type="button" onClick={handleAddTaskBtn}>
        Add task!
      </button>
    </section>
  );
}

function ListOfTasks({ tasks, handleTaskClick }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <ul key={index} onClick={() => handleTaskClick(index)}>
          <a> - {task}</a>
        </ul>
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
