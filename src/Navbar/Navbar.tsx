import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const authContext = useContext(AuthContext);

  const handleActiveMenu = (index: number) => {
    setActiveIndex(index);
  };

  const handleLogout = () => {
    authContext?.logout();
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className="nav-container flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="nav-left flex items-center">
          <div className="logo mr-4">
            <img
              src="https://duchinese.net/vite/assets/brand-logo-DQSdbKZX.svg"
              alt="Du Chinese Logo"
              className="logo-image h-8"
            />
          </div>
          <Link to={`/lessons`}>
            <div
              className={`nav-item ${activeIndex === 0 && "active"} mr-4`}
              onClick={() => handleActiveMenu(0)}
            >
              Du Chinese
            </div>
          </Link>
          <div
            className={`nav-item ${activeIndex === 1 && "active"} mr-4`}
            onClick={() => handleActiveMenu(1)}
          >
            Lessons
          </div>
          <div
            className={`nav-item ${activeIndex === 2 && "active"} mr-4`}
            onClick={() => handleActiveMenu(2)}
          >
            Flashcards
          </div>
          <div
            className={`nav-item ${activeIndex === 3 && "active"} mr-4`}
            onClick={() => handleActiveMenu(3)}
          >
            Grammar
          </div>
        </div>
        <div className="nav-right relative">
          <FontAwesomeIcon
            icon={faUser}
            className="profile cursor-pointer"
            onClick={toggleDropdown}
          />
          {showDropdown && (
            <div className="dropdown-menu absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
