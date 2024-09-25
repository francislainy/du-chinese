import { useParams } from "react-router-dom";
import "./LessonDetail.css";

import duChineseCard from "../assets/du-chinese-card.jpg";
import { useEffect, useState } from "react";
import { favouriteLesson, getLesson, unfavouriteLesson } from "../api/api.ts";
import { ILesson } from "../interfaces/ILesson.ts";

function LessonDetail() {
  const { id } = useParams<{ id: string }>();
  const [lesson, setLesson] = useState<ILesson | null>(null);

  const toggleSaveFavourite = async () => {
    if (id && lesson) {
      try {
        const response = lesson.favouritedByCurrentUser
          ? await unfavouriteLesson(id)
          : await favouriteLesson(id);
        console.log(response);
        setLesson({
          ...lesson,
          favouritedByCurrentUser: !lesson.favouritedByCurrentUser,
        });
      } catch (error) {
        console.log("Error saving favourite");
      }
    }
  };
  //todo: fetch is read/not read - 2024-09-24

  useEffect(() => {
    if (id) {
      const fetchLesson = async (id: string) => {
        try {
          const response = await getLesson(id);
          setLesson(response.data);
        } catch (error) {
          console.log("Error fetching lesson");
        }
      };
      fetchLesson(id).then((r) => console.log(r));
    }
  }, [id]);

  return (
    <div className="m-10">
      <div className="flex">
        <div className="w-1/2">
          <h1>Card Dail: {id}</h1>
          <div className="flex space-x-4">
            <div className="lesson-level text-orange-500 text-sm uppercase">
              {lesson?.level.toUpperCase()}
            </div>
            <div className="lesson-date text-gray-500 text-sm">
              {lesson?.date}
            </div>
          </div>

          <div className="text-2xl font-bold text-red-500">{lesson?.title}</div>

          <div
            className="cursor-pointer flex items-center space-x-2 bg-gray-200 p-2 rounded-md w-32 h-10 justify-center save-lesson-container"
            onClick={toggleSaveFavourite}
          >
            <div className="text-2xl text-slate-400">
              <i
                className={`fa${lesson?.favouritedByCurrentUser ? "s" : "r"} fa-star`}
              ></i>
            </div>
            <div className="text-slate-400 whitespace-nowrap">Save Lesson</div>
          </div>

          <div className="flex lesson-description-image items-center">
            <div className="lesson-text text-2xl text-gray-600">
              <p>{lesson?.description}</p>
            </div>
          </div>
        </div>

        <div className="lesson-image w-1/2">
          <img
            src={duChineseCard}
            alt="lesson-card"
            className="w-full h-auto block"
          />
        </div>
      </div>

      <div>
        <div>{lesson?.content}</div>
        <div>Mark as read</div>
      </div>
    </div>
  );
}

export default LessonDetail;
