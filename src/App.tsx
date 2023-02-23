import { useState } from "react";
import TestSite from "./TestSite";
import SingleColor from "./SingleColor";
import { useAppDispatch, useAppSelector } from "./hooks";
import { selectPalette, selectPreviousPalettes } from "./store/paletteSlice";
import { generatePallete } from "./store/paletteSlice";
import { ColorData, Pallete } from "./store/paletteSlice";
import Hero from "./Hero";
import NavBar from "./NavBar";
import SelectPalette from "./SelectPalette";

function App() {
  const dispatch = useAppDispatch();
  const testing = useAppSelector(selectPalette);

  return (
    <div className=" h-screen bg-gray-100 font-Inter font-medium">
      <NavBar />
      <Hero />
      <div className="mx-3 pt-12">
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
        <SelectPalette />
        <TestSite />
      </div>
    </div>
  );
}

export default App;
