import { useState } from "react";
import TestSite from "./TestSite";
import SingleColor from "./SingleColor";
import { useAppDispatch, useAppSelector } from "./hooks";
import { selectPalette } from "./store/paletteSlice";
import { generatePallete } from "./store/paletteSlice";
import { ColorData, Pallete } from "./store/paletteSlice";
import Hero from "./Hero";
import NavBar from "./NavBar";

function App() {
  const dispatch = useAppDispatch();
  const testing = useAppSelector(selectPalette);

  function getColor(): void {
    dispatch(generatePallete());
  }

  return (
    <div className=" h-screen bg-gray-100 font-Inter font-medium">
      <NavBar />
      <Hero />
      <div className="pt-32">
        <div className="mx-auto grid h-32 max-w-7xl grid-cols-5 overflow-hidden rounded-sm">
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
            className="mt-2 rounded-md border-2 border-black px-6 py-3 font-semibold text-black transition ease-in-out hover:bg-slate-400 hover:text-black"
            onClick={getColor}
          >
            Generate Random Palette
          </button>
        </div>
        <TestSite />
      </div>
    </div>
  );
}

export default App;
