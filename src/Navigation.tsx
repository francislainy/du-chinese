import { FC } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Lessons from "./Lessons";
import Navbar from "./Navbar";
import CardDetail from "./CardDetail";

const Navigation: FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/lessons" />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/card-detail/:id" element={<CardDetail />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
