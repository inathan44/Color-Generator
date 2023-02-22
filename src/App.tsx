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
    <div className="bg-gray-700 h-screen font-Inter font-medium ">
      <div className="">
        <div className="grid grid-cols-5 max-w-7xl mx-auto pt-2">
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
        <div className="flex justify-center">
          <button
            className="border-2 border-white px-6 py-3 mt-2 text-white rounded-md"
            onClick={getColor}
          >
            Generate Random Color
          </button>
        </div>
        <TestSite />
      </div>
    </div>
  );
}

export default App;
