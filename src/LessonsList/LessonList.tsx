import "./LessonList.css";

import LessonItem from "../LessonItem/LessonItem";
import { useEffect, useState } from "react";
import { getLessons } from "../api/api.ts";
import { ILesson } from "../interfaces/ILesson.ts";
import { ClipLoader } from "react-spinners";

interface LessonListProps {
  selectedFilters: string[];
}

function LessonList({ selectedFilters }: LessonListProps) {
  const [lessons, setLessons] = useState<ILesson[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await getLessons();
        setLessons(response.data);
      } catch (error) {
        setError("Error fetching lessons");
      } finally {
        setLoading(false);
      }
    };
    fetchLessons().then((r) => console.log(r));
  }, []);

  const filteredItems = lessons.filter((item) => {
    return selectedFilters.length === 0 || selectedFilters.includes(item.level);
  });

  if (loading)
    return (
      <div className="spinner-container">
        <ClipLoader color={"#123abc"} loading={loading} size={50} />
      </div>
    );
  if (error) return <div>{error}</div>;

  return (
    <div className="card-list-container">
      {filteredItems.length != 0 ? (
        filteredItems.map((card, index) => <LessonItem key={index} {...card} />)
      ) : (
        <div>No items to show</div>
      )}
    </div>
  );
}

export default LessonList;
