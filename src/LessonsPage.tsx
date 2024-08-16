import "./LessonsPage.css";
import LessonList from "./LessonList";
import TopContainer from "./Banner";
import LessonTypeList from "./FilterList";
import { useState } from "react";

function Lessons() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  return (
    <div className="lessons-container">
      <TopContainer />
      <h1 className="lessons-ongoing-header">Ongoing Series</h1>
      <hr />
      <LessonTypeList
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <LessonList selectedFilters={selectedFilters} />
    </div>
  );
}

export default Lessons;
