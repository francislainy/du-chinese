import { useParams } from "react-router-dom";
import "./LessonDetail.css";

import duChineseCard from "../assets/du-chinese-card.jpg";
import { useState } from "react";

function LessonDetail() {
  const { id } = useParams<{ id: string }>();
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className="m-10">
      <div className="flex">
        <div className="w-1/2">
          <h1>Card Dail: {id}</h1>
          <div className="flex space-x-4">
            <div className="lesson-level text-orange-500 text-sm uppercase">
              Newbie
            </div>
            <div className="lesson-date text-gray-500 text-sm">2019-06-05</div>
          </div>

          <div className="text-2xl font-bold text-red-500">HELLO</div>

          <div
            className="cursor-pointer flex items-center space-x-2 bg-gray-200 p-2 rounded-md w-32 h-10 justify-center save-lesson-container"
            onClick={toggleSave}
          >
            <div className="text-2xl text-slate-400">
              <i className={`fa${isSaved ? "s" : "r"} fa-star`}></i>
            </div>
            <div className="text-slate-400 whitespace-nowrap">Save Lesson</div>
          </div>

          <div className="flex lesson-description-image items-center">
            <div className="lesson-text text-2xl text-gray-600">
              <p>
                Anne has just arrived in China to study. She is at the airport
                waiting for her school’s car to pick her up and strikes up a
                conversation with another airport visitor.
              </p>
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
        <div>Content</div>
        <div>Mark as read</div>
      </div>
    </div>
  );
}

export default LessonDetail;
