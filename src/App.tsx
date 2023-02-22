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
    <div className="bg-gray-700 h-screen font-Inter font-medium">
      <div className="container">
        <h1 className="bg-red-300">Testing</h1>
        <div className="grid grid-cols-5">
          {/* <div className="flex h-64 flex-1 rounded overflow-hidden border-solid border-red-500 border-2"> */}
          {Object.keys(testing).map((color) => {
            return (
              <SingleColor
                key={color}
                color={testing[color as keyof Pallete].hexColor}
              />
            );
          })}
        </div>
        <button onClick={getColor}>Generate Random Color</button>
        <TestSite />
      </div>
    </div>
  );
}

export default App;
