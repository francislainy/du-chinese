import "./LessonList.css";

import LessonItem from "../LessonItem/LessonItem";
import { allItems } from "../data/lessons.tsx";

interface LessonListProps {
  selectedFilters: string[];
}

function LessonList({ selectedFilters }: LessonListProps) {
  const filteredItems = allItems.filter(
    (item) =>
      selectedFilters.length === 0 || selectedFilters.includes(item.type),
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
