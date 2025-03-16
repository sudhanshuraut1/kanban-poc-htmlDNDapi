import '../Kanban.css' ;
import { Card, Avatar, Tag } from "antd"

const KanbanCard = ({ candidate, onDragStart }) => {
    return (
      <Card 
      style={{ width: "250px", minHeight: "150px", backgroundColor: "#fff" }}
        className="candidate-card"
        draggable="true"
        onDragStart={(e) => onDragStart(e, candidate.id)}
      ><Card.Meta
      avatar={<Avatar 
      >{candidate.name[0]}</Avatar>}
      title={candidate.name}
      description={<Tag color="blue">{candidate.status}</Tag>}
    />
      </Card>
    );
  };
  
  export default KanbanCard;
  