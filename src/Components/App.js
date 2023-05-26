import ToolTip from "./ToolTip";
import "../styles/tooltip.css";
import { useEffect, useState } from "react";
function App() {
  const [position, setPosition] = useState();
  const [text, setText] = useState();
  useEffect(() => {
    setPosition("bottom");
    setText(`Thanks for hovering! I'm a tooltip at ${position} position `);
  }, [position]);
  return (
    <div className="App">
      <ToolTip position={position} text={text}>
        <button className="tooltipBtn">Button</button>
      </ToolTip>
    </div>
  );
}

export default App;
