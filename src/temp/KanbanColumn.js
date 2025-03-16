import KanbanCard from "./KanbanCard";
import '../Kanban.css' ;
import { Card } from "antd"


const KanbanColumn = ({ title, candidates, onDrop, onDragOver ,onDragStart }) => {
    return (
      <Card
        className="kanban-column"
       onDragOver={onDragOver}
        onDrop={(e) => onDrop(e, title)}
      >
        <h3>{title}</h3>
        {candidates.map((candidate) => (
          <KanbanCard key={candidate.id} candidate={candidate} onDragStart={onDragStart} />
        ))}
      </Card>
    );
  };
  
  export default KanbanColumn;
  