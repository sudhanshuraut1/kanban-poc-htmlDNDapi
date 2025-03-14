import KanbanCard from "./KanbanCard";


const KanbanColumn = ({ title, tasks, onDrop, onDragOver ,onDragStart }) => {
    return (
      <div
        className="kanban-column"
       onDragOver={onDragOver}
        onDrop={(e) => onDrop(e, title)}
      >
        <h3>{title}</h3>
        {tasks.map((task) => (
          <KanbanCard key={task.id} task={task} onDragStart={onDragStart} />
        ))}
      </div>
    );
  };
  
  export default KanbanColumn;
  