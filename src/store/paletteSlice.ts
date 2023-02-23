import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { Root } from "react-dom/client";
import { RootState } from "./store";

// When the reducer has a payload/action make sure to add
// PayloadAction<TYPEHERE> as the type of the action

export type ColorData = {
  hexColor: string;
  locked: boolean;
};

export interface Pallete {
  main: ColorData;
  secondary: ColorData;
  third: ColorData;
  fourth: ColorData;
  fifth: ColorData;
}

const palette: Pallete = {
  main: {
    hexColor: "#fff",
    locked: false,
  },
  secondary: {
    hexColor: "#fff",
    locked: false,
  },
  third: {
    hexColor: "#fff",
    locked: false,
  },
  fourth: {
    hexColor: "#fff",
    locked: false,
  },
  fifth: {
    hexColor: "#fff",
    locked: false,
  },
};

type InitState = {
  palette: Pallete;
  previousPalettes: Pallete[];
  paletteIndex: number;
};

const initialState: InitState = {
  palette,
  previousPalettes: [],
  paletteIndex: 0,
};

const paletteSlice = createSlice({
  name: "palette",
  initialState,
  reducers: {
    generatePallete(state): void {
      for (const key in state.palette) {
        state.palette[key as keyof Pallete].hexColor = state.palette[
          key as keyof Pallete
        ].locked
          ? state.palette[key as keyof Pallete].hexColor
          : "#" + Math.random().toString(16).slice(2, 8);
      }
      state.previousPalettes.push(state.palette);
      state.paletteIndex = state.previousPalettes.length - 1;
    },
    undoRedoPalette(state, action): void {
      if (action.payload === "redo") {
        state.paletteIndex = Math.min(
          state.paletteIndex + 1,
          state.previousPalettes.length - 1
        );
      } else if (action.payload === "undo") {
        state.paletteIndex = Math.max(0, state.paletteIndex - 1);
      }
      state.palette = state.previousPalettes[state.paletteIndex];
    },
  },
});

export const { generatePallete, undoRedoPalette } = paletteSlice.actions;

export const selectPalette = (state: RootState) => state.palette.palette;
export const selectPreviousPalettes = (state: RootState) =>
  state.palette.previousPalettes;

export const selectPaletteIndex = (state: RootState) =>
  state.palette.paletteIndex;

export default paletteSlice.reducer;
