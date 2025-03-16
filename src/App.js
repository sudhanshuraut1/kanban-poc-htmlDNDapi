import './Kanban.css';
import React, { useState } from "react";
import KanbanColumn from "./temp/KanbanColumn";




const App = () => {
  const [candidates, setCandidates] = useState([
    { id: "1", name: "candidate 1", status: "Resume Shortlisted" },
    { id: "2", name: "candidate 2", status: "Assessment passed" },
    { id: "3", name: "candidate 3", status: "1st interview passed" },
    { id: "4", name: "candidate 4", status: "final interview passed" },
    { id: "5", name: "candidate 5", status: "job offered" }
  ]);

  const onDragStart = (e, candidateId) => {
    e.dataTransfer.setData("candidateId", candidateId);
  };

  const onDragOver = (e) => {   // allow drop
    e.preventDefault();         
  };

  const onDrop = (e, newStatus) => {
    const candidateId = e.dataTransfer.getData("candidateId");

    setCandidates((prevCandidates) =>
      prevCandidates.map((candidate) =>
        candidate.id === candidateId ? { ...candidate, status: newStatus } : candidate
      )
    );
  };

  return (
    <div className="kanban-board">
      <KanbanColumn
        title="Resume Shortlisted"
        candidates={candidates.filter((candidate) => candidate.status === "Resume Shortlisted")}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragStart={onDragStart}
      />
      <KanbanColumn
        title="Assessment passed"
        candidates={candidates.filter((candidate) => candidate.status === "Assessment passed")}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragStart={onDragStart}
      />
      <KanbanColumn
        title="1st interview passed"
        candidates={candidates.filter((candidate) => candidate.status === "1st interview passed")}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragStart={onDragStart}
      />
      <KanbanColumn
        title="final interview passed"
        candidates={candidates.filter((candidate) => candidate.status === "final interview passed")}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragStart={onDragStart}
      />
      <KanbanColumn
        title="job offered"
        candidates={candidates.filter((candidate) => candidate.status === "job offered")}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragStart={onDragStart}
      />
    </div>
  );
};

export default App;
