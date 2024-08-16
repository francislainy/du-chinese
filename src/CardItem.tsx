import "./CardItem.css";

interface CardProps {
  date: string;
  type: string;
  imageUrl: string;
  title: string;
  level: string;
}

const CardItem: React.FC<CardProps> = ({
  date,
  type,
  imageUrl,
  title,
  level,
}) => {
  return (
    <div className="card-item-container">
      <div className="card-inner-container">
        <div className="card-date-type-container">
          <p className="card-date">{date}</p>
          <p className="card-type">{type}</p>
        </div>

        <div className="card-image">
          {/* <img src={imageUrl} alt={title} /> */}
          <img src="src/assets/du-chinese-card.jpg" alt={title} />
        </div>
        <h3 className="card-title">{title}</h3>

        <div className="card-level-container">
          <p className="card-level">{level}</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
