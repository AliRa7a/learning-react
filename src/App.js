import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");
  const [prevColor, setPrevColor] = useState("black");

  const handleColorChange = (newColor) => {
    if (newColor !== color) {
      setPrevColor(color);
      setColor(newColor);
    }
  };

  return (
    <div
      className="App w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-3xl font-bold underline" style={{ color: prevColor }}>
        Background Changer - useState & Tailwind CSS
      </h1>
      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px=2">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg">
          <button
            onClick={() => handleColorChange("red")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "red", color: "white" }}
          >
            Red
          </button>
          <button
            onClick={() => handleColorChange("green")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "green", color: "white" }}
          >
            Green
          </button>
          <button
            onClick={() => handleColorChange("orange")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "orange", color: "white" }}
          >
            Orange
          </button>
          <button
            onClick={() => handleColorChange("grey")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "grey", color: "white" }}
          >
            Grey
          </button>
          <button
            onClick={() => handleColorChange("purple")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "purple", color: "white" }}
          >
            Purple
          </button>
          <button
            onClick={() => handleColorChange("black")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "black", color: "white" }}
          >
            Black
          </button>
          <button
            onClick={() => handleColorChange("pink")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "pink", color: "white" }}
          >
            Pink
          </button>
          <button
            onClick={() => handleColorChange("blue")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "blue", color: "white" }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
