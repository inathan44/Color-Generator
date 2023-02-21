import { useState } from "react";
import TestSite from "./TestSite";
import SingleColor from "./SingleColor";

interface Pallete {
  main: string;
  secondary: string;
  third: string;
  fourth: string;
  fifth: string;
}

function App() {
  const [colors, setColors] = useState<Pallete>({
    main: "#fff",
    secondary: "#fff",
    third: "#fff",
    fourth: "#fff",
    fifth: "#fff",
  });

  function getColor(): void {
    // "#" + Math.random().toString(16).slice(2, 8)
    setColors({
      main: "#" + Math.random().toString(16).slice(2, 8),
      secondary: "#" + Math.random().toString(16).slice(2, 8),
      third: "#" + Math.random().toString(16).slice(2, 8),
      fourth: "#" + Math.random().toString(16).slice(2, 8),
      fifth: "#" + Math.random().toString(16).slice(2, 8),
    });
  }

  function getContrastYIQ(hexcolor: string): string {
    var r = parseInt(hexcolor.slice(0, 2), 16);
    var g = parseInt(hexcolor.slice(2, 2), 16);
    var b = parseInt(hexcolor.slice(4, 6), 16);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? "black" : "white";
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Testing</h1>
        <div className="colors">
          {Object.keys(colors).map((color) => {
            return (
              <SingleColor key={color} color={colors[color as keyof Pallete]} />
            );
          })}
        </div>
        <button
          onClick={() => {
            getColor();
            Object.keys(colors).forEach((color): void => {
              console.log(colors[color as keyof Pallete]);
              getContrastYIQ(colors[color as keyof Pallete]);
            });
          }}
        >
          Generate Random Color
        </button>
        <TestSite />
      </div>
    </div>
  );
}

export default App;
