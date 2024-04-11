import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { options } from "../../api/api.ts";
import { IGame, GamesState } from "./types.ts";

const initialState: GamesState = {
  games: [],
  status: "idle",
  filter: {
    platform: "all",
    category: "",
  },
};

interface IFetchGames {
  platform: string;
  category: string;
}

export const fetchGames = createAsyncThunk<IGame[], string>(
  "games/fetchGames",
  async (platform: string) => {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=${platform}`;
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return (await response.json()) as Promise<IGame[]>;
  },
);

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setPlatformFilter(state: GamesState, action: PayloadAction<string>) {
      state.filter.platform = action.payload;
    },
  },
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

export const { setPlatformFilter } = gamesSlice.actions;
export default gamesSlice.reducer;
