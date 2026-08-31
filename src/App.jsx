

import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Learn Git", completed: true },
    { id: 3, text: "Learn CI/CD", completed: false },
  ]);

  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Task Manager</h1>

        <p className="subtitle">
          React CI/CD Demonstration Project
        </p>

        <div className="input-section">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
          />

          <button onClick={addTask}>Add</button>
        </div>

        <div className="tasks">
          {tasks.map((item) => (
            <div className="task" key={item.id}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleTask(item.id)}
              />

              <span className={item.completed ? "completed" : ""}>
                {item.text}
              </span>
            </div>
          ))}
        </div>

        <div className="pipeline">
          <h2>CI/CD Pipeline</h2>

          <div className="pipeline-steps">
            <div>💻 Code</div>
            <div>→</div>
            <div>📦 Git</div>
            <div>→</div>
            <div>⚙️ Build</div>
            <div>→</div>
            <div>🧪 Test</div>
            <div>→</div>
            <div>🚀 Deploy</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;