import { useAppDispatch, useAppSelector } from "./hooks";
import {
  generatePallete,
  selectPaletteIndex,
  undoRedoPalette,
} from "./store/paletteSlice";
import { selectPreviousPalettes } from "./store/paletteSlice";

const SelectPalette = () => {
  const dispatch = useAppDispatch();
  const prevPallets = useAppSelector(selectPreviousPalettes);
  const index = useAppSelector(selectPaletteIndex);

  function getColor(): void {
    dispatch(generatePallete());
  }

  function handleUndoRedo(type: string): void {
    dispatch(undoRedoPalette(type));
  }

  return (
    <div className="flex justify-center">
      <button
        onClick={() => handleUndoRedo("undo")}
        className="mt-2 rounded-md border-2 border-black px-6 py-3 font-semibold text-black transition ease-in-out hover:bg-sky-100 hover:text-black"
      >
        Undo
      </button>
      <button
        className="mt-2 rounded-md border-2 border-black px-6 py-3 font-semibold text-black transition ease-in-out hover:bg-sky-100 hover:text-black"
        onClick={getColor}
      >
        Generate Random Palette
      </button>
      <button
        onClick={() => handleUndoRedo("redo")}
        className="mt-2 rounded-md border-2 border-black px-6 py-3 font-semibold text-black transition ease-in-out hover:bg-sky-100 hover:text-black"
      >
        Redo
      </button>
    </div>
  );
};

export default SelectPalette;
