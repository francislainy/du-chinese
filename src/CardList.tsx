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
      level: "Advanced",
    },
    {
      id: "2",
      date: "2023-10-02",
      type: "Type B",
      imageUrl: "https://example.com/image2.jpg",
      title: "Card Title 2",
      level: "Upper Intermediate",
    },
    {
      id: "3",
      date: "2023-10-03",
      type: "Type C",
      imageUrl: "https://example.com/image3.jpg",
      title: "Card Title 3",
      level: "Advanced",
    },
    {
      id: "4",
      date: "2023-10-04",
      type: "Type D",
      imageUrl: "https://example.com/image4.jpg",
      title: "Card Title 4",
      level: "Intermediate",
    },
    {
      id: "5",
      date: "2023-10-05",
      type: "Type E",
      imageUrl: "https://example.com/image5.jpg",
      title: "Card Title 5",
      level: "Upper Intermediate",
    },
    {
      id: "6",
      date: "2023-10-06",
      type: "Type F",
      imageUrl: "https://example.com/image6.jpg",
      title: "Card Title 6",
      level: "Newbie",
    },
    {
      id: "7",
      date: "2023-10-07",
      type: "Type G",
      imageUrl: "https://example.com/image7.jpg",
      title: "Card Title 7",
      level: "Elementary",
    },
    {
      id: "8",
      date: "2023-10-08",
      type: "Type H",
      imageUrl: "https://example.com/image8.jpg",
      title: "Card Title 8",
      level: "Advanced",
    },
    {
      id: "9",
      date: "2023-10-09",
      type: "Type I",
      imageUrl: "https://example.com/image9.jpg",
      title: "Card Title 9",
      level: "Intermediate",
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
