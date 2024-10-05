import { FC, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import Login from "../Login.tsx";
import Register from "../Register.tsx";
import Navbar from "../components/Navbar/Navbar.tsx";
import Lessons from "../components/LessonsPage/LessonsPage.tsx";
import LessonDetail from "../components/LessonDetail/LessonDetail.tsx";

const Navigation: FC = () => {
  const authContext = useContext(AuthContext);

  return (
    <Router>
      {authContext?.isAuthenticated && <Navbar />}
      <Routes>
        {authContext?.isAuthenticated ? (
          <>
            <Route path="/" element={<Navigate to="/lessons" />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/lessons/:id" element={<LessonDetail />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default Navigation;
