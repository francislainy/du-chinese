import "./CardList.css";

import CardItem from "./CardItem";

interface ICard {
  id: string;
  date: string;
  type: string;
  imageUrl: string;
  title: string;
  level: string;
}

function CardList() {
  const cardList: ICard[] = [
    {
      id: "1",
      date: "2023-10-01",
      type: "Type A",
      imageUrl: "https://example.com/image1.jpg",
      title: "Card Title 1",
      level: "Level 1",
    },
    {
      id: "2",
      date: "2023-10-02",
      type: "Type B",
      imageUrl: "https://example.com/image2.jpg",
      title: "Card Title 2",
      level: "Level 2",
    },
    {
      id: "3",
      date: "2023-10-03",
      type: "Type C",
      imageUrl: "https://example.com/image3.jpg",
      title: "Card Title 3",
      level: "Level 3",
    },
  ];

  return (
    <div className="card-list-container">
      {cardList.map((card, index) => (
        <CardItem key={index} {...card} />
      ))}
    </div>
  );
}

export default CardList;
