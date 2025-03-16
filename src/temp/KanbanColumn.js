import KanbanCard from "./KanbanCard";


const KanbanColumn = ({ title, candidates, onDrop, onDragOver ,onDragStart }) => {
    return (
      <div
        className="kanban-column"
       onDragOver={onDragOver}
        onDrop={(e) => onDrop(e, title)}
      >
        <h3>{title}</h3>
        {candidates.map((candidate) => (
          <KanbanCard key={candidate.id} candidate={candidate} onDragStart={onDragStart} />
        ))}
      </div>
    );
  };
  
  export default KanbanColumn;
  