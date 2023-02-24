import TestSite from "./TestSite";
import SingleColor from "./SingleColor";
import { useAppDispatch, useAppSelector } from "./hooks";
import { selectPalette, selectPreviousPalettes } from "./store/paletteSlice";
import Hero from "./Hero";
import NavBar from "./NavBar";
import SelectPalette from "./SelectPalette";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className=" h-screen bg-gray-100 font-Inter font-medium">
      <NavBar />
      <Hero />
      <div className="mx-3 pt-12">
        <div className="mx-auto grid h-96 max-w-7xl grid-cols-5 overflow-hidden rounded-sm">
          <SingleColor />
        </div>
        <SelectPalette />
        <TestSite />
      </div>
    </div>
  );
}

export default App;
