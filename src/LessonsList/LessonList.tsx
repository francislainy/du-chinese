import "./LessonList.css";

import LessonItem from "../LessonItem/LessonItem";

interface ILesson {
  id: string;
  date: string;
  type: string;
  imageUrl: string;
  title: string;
  level: string;
}

const allItems: ILesson[] = [
  {
    id: "1",
    date: "2023-01-01",
    type: "Newbie",
    imageUrl: "src/assets/du-chinese-card.jpg",
    title: "Item 1",
    level: "Newbie",
  },
  {
    id: "2",
    date: "2023-01-02",
    type: "Elementary",
    imageUrl: "src/assets/du-chinese-card.jpg",
    title: "Item 2",
    level: "Elementary",
  },
  {
    id: "3",
    date: "2023-01-03",
    type: "Intermediate",
    imageUrl: "src/assets/du-chinese-card.jpg",
    title: "Item 3",
    level: "Intermediate",
  },
  {
    id: "4",
    date: "2023-01-04",
    type: "Upper Intermediate",
    imageUrl: "src/assets/du-chinese-card.jpg",
    title: "Item 4",
    level: "Upper Intermediate",
  },
  {
    id: "5",
    date: "2023-01-05",
    type: "Advanced",
    imageUrl: "src/assets/du-chinese-card.jpg",
    title: "Item 5",
    level: "Advanced",
  },
  {
    id: "6",
    date: "2023-01-06",
    type: "Master",
    imageUrl: "src/assets/du-chinese-card.jpg",
    title: "Item 6",
    level: "Master",
  },
  {
    id: "7",
    date: "2023-01-06",
    type: "Master",
    imageUrl: "src/assets/du-chinese-card.jpg",
    title: "Item 6",
    level: "Master",
  },
];

interface LessonListProps {
  selectedFilters: string[];
}

function LessonList({ selectedFilters }: LessonListProps) {
  const filteredItems = allItems.filter(
    (item) =>
      selectedFilters.length === 0 || selectedFilters.includes(item.type)
  );

  return (
    <div className="card-list-container">
      {filteredItems.map((card, index) => (
        <LessonItem key={index} {...card} />
      ))}
    </div>
  );
}

export default LessonList;
