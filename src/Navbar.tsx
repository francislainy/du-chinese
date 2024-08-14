import { useState } from 'react';
import './Navbar.css'

function Navbar() {
 
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleActiveMenu = (index: number) => {
      setActiveIndex(index)
  }

  return (
    <>
    <div className="container">
      <div className="nav-left">
        <div className="logo">Image</div>
        <div className={`nav-item ${activeIndex === 0 && 'active'}`} onClick={()=> handleActiveMenu(0)}>Du Chinese</div>
        <div className={`nav-item ${activeIndex === 1 && 'active'}`} onClick={()=> handleActiveMenu(1)}>Lessons</div>
         <div className={`nav-item ${activeIndex === 2 && 'active'}`} onClick={()=> handleActiveMenu(2)}>Flashcards</div>
        <div className={`nav-item ${activeIndex === 3 && 'active'}`} onClick={()=> handleActiveMenu(3)}>Grammar</div> 
      </div>
      <div className="nav-right">Right</div>
    </div>   
    </>
  )
}

export default Navbar;
