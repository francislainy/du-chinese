import "./LessonTypeItem.css";

interface ILessonType {
  id: string;
  type: string;
  // isActive: boolean;
}

const LessonTypeItem: React.FC<ILessonType> = ({ id, type }) => {
  return (
    <div className="lesson-type-item-container">
      <label htmlFor="lessonType" style={{ marginLeft: "8px" }}>
        {type}
      </label>
      <input type="checkbox" id="lessonType" />
    </div>
  );
}

export default LessonTypeItem;
