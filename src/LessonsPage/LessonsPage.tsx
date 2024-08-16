import "./LessonsPage.css";
import LessonList from "./../LessonsList/LessonList";
import TopContainer from "./../Banner/Banner";
import FilterList from "./../FilterList/FilterList";
import { useState } from "react";

function Lessons() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  return (
    <div className="lessons-container">
      <TopContainer />
      <h1 className="lessons-ongoing-header">Ongoing Series</h1>
      <hr />
      <FilterList
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <LessonList selectedFilters={selectedFilters} />
    </div>
  );
}

export default Lessons;
