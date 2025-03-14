


const KanbanCard = ({ task, onDragStart }) => {
    return (
      <div 
        className="task-card"
        draggable="true"
        onDragStart={(e) => onDragStart(e, task.id)}
      >
        {task.name}
      </div>
    );
  };
  
  export default KanbanCard;
  