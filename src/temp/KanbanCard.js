


const KanbanCard = ({ candidate, onDragStart }) => {
    return (
      <div 
        className="candidate-card"
        draggable="true"
        onDragStart={(e) => onDragStart(e, candidate.id)}
      >
        {candidate.name}
      </div>
    );
  };
  
  export default KanbanCard;
  