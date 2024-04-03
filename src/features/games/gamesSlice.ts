import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url, options } from "../../api/api.ts";

export interface Game {
  id: number;
  title: string;
  short_description: string;
  platform: string;
  genre: string;
  thumbnail: string;
  game_url?: string;
  publisher?: string;
  developer?: string;
  release_date?: string;
  freetogame_profile_url?: string;
}

interface GamesState {
  games: Game[];
  status: "idle" | "loading" | "failed";
}

const initialState: GamesState = {
  games: [],
  status: "idle",
};

export const fetchGames = createAsyncThunk<Game[]>(
  "games/fetchGames",
  async () => {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return (await response.json()) as Promise<Game[]>;
  },
);

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.status = "idle";
        state.games = action.payload;
      })
      .addCase(fetchGames.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default gamesSlice.reducer;
