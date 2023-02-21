import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
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
};

const initialState: InitState = {
  palette,
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
    },
  },
});

export const { generatePallete } = paletteSlice.actions;

export const selectPalette = (state: RootState) => state.palette.palette;

export default paletteSlice.reducer;
