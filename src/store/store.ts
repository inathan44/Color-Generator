import { configureStore } from "@reduxjs/toolkit";
import paletteSlice from "./paletteSlice";

const store = configureStore({
  reducer: {
    palette: paletteSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
