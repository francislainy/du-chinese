import "./LessonList.css";

import LessonItem from "../LessonItem/LessonItem";
import { useContext, useEffect, useState } from "react";
import { getLessons } from "../../api/api.ts";
import { ILesson } from "../../interfaces/ILesson.ts";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../context/AuthContext.tsx";

interface LessonListProps {
  selectedFilters: string[];
}

function LessonList({ selectedFilters }: LessonListProps) {
  const [lessons, setLessons] = useState<ILesson[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    const fetchLessons = async () => {
      if (authContext?.credentials) {
        try {
          const { username, password } = authContext.credentials;
          const response = await getLessons(username, password);
          setLessons(response.data);
        } catch (error) {
          setError("Error fetching lessons");
        } finally {
          setLoading(false);
        }
      } else {
        setError("No credentials found");
        setLoading(false);
      }
    };

    fetchLessons().then((r) => console.log(r));
  }, [authContext]);

  const filteredItems = lessons.filter((item) => {
    return selectedFilters.length === 0 || selectedFilters.includes(item.level);
  });

  if (loading)
    return (
      <div className="spinner-container">
        <ClipLoader color={"#123abc"} loading={loading} size={50} />
      </div>
    );
  if (error) return <div className={"error"}>{error}</div>;

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
