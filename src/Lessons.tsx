import "./Lessons.css";
import CardList from "./CardList";
import TopContainer from "./TopContainer";
import LessonTypeList from "./LessonTypeList";
import { useState } from "react";

function Lessons() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  return (
    <div className="lessons-container">
      <TopContainer />
      <h1 className="lessons-ongoing-header">Ongoing Series</h1>
      <hr />
      <LessonTypeList selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
      <CardList selectedFilters={selectedFilters} />
    </div>
  );
}

export default Lessons;
