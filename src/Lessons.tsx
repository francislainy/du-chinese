import "./Lessons.css";
import CardList from "./CardList";
import TopContainer from "./TopContainer";
import LessonTypeList from "./LessonTypeList";

function Lessons() {
  return (
    <div className="lessons-container">
      <TopContainer />
      <h1 className="lessons-ongoing-header">Ongoing Series</h1>
      <hr />
      <LessonTypeList/>

      <CardList />
    </div>
  );
}

export default Lessons;
