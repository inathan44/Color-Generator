import { useState } from "react";
import TestSite from "./TestSite";
import SingleColor from "./SingleColor";
import { useAppDispatch, useAppSelector } from "./hooks";
import { selectPalette } from "./store/paletteSlice";
import { generatePallete } from "./store/paletteSlice";
import { ColorData, Pallete } from "./store/paletteSlice";

function App() {
  const dispatch = useAppDispatch();
  const testing = useAppSelector(selectPalette);

  function getColor(): void {
    dispatch(generatePallete());
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Testing</h1>
        <div className="colors">
          {Object.keys(testing).map((color) => {
            return (
              <SingleColor
                key={color}
                color={testing[color as keyof Pallete].hexColor}
              />
            );
          })}
        </div>
        <button
          onClick={() => {
            getColor();
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
