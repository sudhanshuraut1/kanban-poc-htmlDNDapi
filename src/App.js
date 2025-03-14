import './Kanban.css';
import React, { useState } from "react";
import KanbanColumn from "./temp/KanbanColumn";




const App = () => {
  const [tasks, setTasks] = useState([
    { id: "1", name: "candidate 1", status: "Resume Shortlisted" },
    { id: "2", name: "candidate 2", status: "Assessment passed" },
    { id: "3", name: "candidate 3", status: "1st interview passed" },
    { id: "4", name: "candidate 4", status: "final interview passed" },
    { id: "5", name: "candidate 5", status: "job offered" }
  ]);

  const onDragStart = (e, taskId) => {
    e.dataTransfer.setData("taskId", taskId);
  };

  const onDragOver = (e) => {   // allow drop
    e.preventDefault();         
  };

  const onDrop = (e, newStatus) => {
    const taskId = e.dataTransfer.getData("taskId");

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="kanban-board">
      <KanbanColumn
        title="Resume Shortlisted"
        tasks={tasks.filter((task) => task.status === "Resume Shortlisted")}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragStart={onDragStart}
      />
      <KanbanColumn
        title="Assessment passed"
        tasks={tasks.filter((task) => task.status === "Assessment passed")}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragStart={onDragStart}
      />
      <KanbanColumn
        title="1st interview passed"
        tasks={tasks.filter((task) => task.status === "1st interview passed")}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragStart={onDragStart}
      />
      <KanbanColumn
        title="final interview passed"
        tasks={tasks.filter((task) => task.status === "final interview passed")}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragStart={onDragStart}
      />
      <KanbanColumn
        title="job offered"
        tasks={tasks.filter((task) => task.status === "job offered")}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragStart={onDragStart}
      />
    </div>
  );
};

export default App;
