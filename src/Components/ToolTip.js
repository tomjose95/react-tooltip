import { useState } from "react";
import "../styles/tooltip.css";
function ToolTip({ position, text, children }) {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <div className="container">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {" "}
        {children}
      </div>
      {isHover && <div className={`toolTip ${position}`}>{text}</div>}
    </div>
  );
}

export default ToolTip;
