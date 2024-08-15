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
      <div className="inner-container">
        <div className="card-date-type">
          <p>{date}</p>
          <p>{type}</p>
        </div>

        <div className="card-image">
          <img src={imageUrl} alt={title} />
        </div>
        <h3 className="card-title">{title}</h3>

        <div className="card-level">
          <p>{level}</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
