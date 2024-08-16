import "./LessonTypeList.css";
import LessonTypeItem from "./LessonTypeItem";

interface ILessonType {
  id: string;
  type: string;
  isActive: boolean;
}

interface LessonTypeListProps {
  selectedFilters: string[];
  setSelectedFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

function LessonTypeList({
  selectedFilters,
  setSelectedFilters,
}: LessonTypeListProps) {
    
  const lessonTypeList: ILessonType[] = [
    { id: "1", type: "Newbie", isActive: false },
    { id: "2", type: "Elementary", isActive: false },
    { id: "3", type: "Intermediate", isActive: false },
    { id: "4", type: "Upper Intermediate", isActive: false },
    { id: "5", type: "Advanced", isActive: true },
    { id: "6", type: "Master", isActive: false },
  ];

  const handleCheckboxChange = (type: string) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(type)
        ? prevFilters.filter((filter) => filter !== type)
        : [...prevFilters, type]
    );
  };

  return (
    <div className="lesson-type-list-container">
      {lessonTypeList.map((lessonType, index) => (
        <LessonTypeItem
          key={index}
          {...lessonType}
          isActive={selectedFilters.includes(lessonType.type)}
          onCheckboxChange={handleCheckboxChange}
        />
      ))}
    </div>
  );
}

export default LessonTypeList;
