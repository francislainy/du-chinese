import { useNavigate } from "react-router-dom";
import "./LessonItem.css";

import duChineseCard from "../assets/du-chinese-card.jpg";

interface LessonItemProps {
  id: string;
  date: string;
  type: string;
  imageUrl: string;
  title: string;
  level: string;
}

const LessonItem: React.FC<LessonItemProps> = ({
  id,
  date,
  type,
  title,
  level,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/card-detail/${id}`);
  };

  return (
    <div className="card-item-container" onClick={handleClick}>
      <div className="card-inner-container">
        <div className="card-date-type-container">
          <p className="card-date">{date}</p>
          <p className="card-type">{type}</p>
        </div>

        <div className="card-image">
          <img src={duChineseCard} alt={title} />
        </div>
        <h3 className="card-title">{title}</h3>
        <div className="card-level-container">
          <p className="card-level">{level}</p>
        </div>
      </div>
    </div>
  );
};

export default LessonItem;
