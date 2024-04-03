import { configureStore } from "@reduxjs/toolkit";
import gamesSlice from "../features/games/gamesSlice.ts";

export const store = configureStore({
  reducer: {
    games: gamesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
