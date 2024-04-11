import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { options } from "../../api/api.ts";
import { IGame, GamesState, FilterGame } from "./types.ts";
import qs from "qs";

const initialState: GamesState = {
  games: [],
  status: "idle",
  filter: {
    platforms: [], // pc, browser
    category: "",
  },
};

export const fetchGames = createAsyncThunk<IGame[], FilterGame>(
  "games/fetchGames",
  async (gamesFilter: FilterGame) => {
    const { platforms } = gamesFilter;

    const queryParams = qs.stringify(
      {
        platform: platforms.length === 1 ? platforms[0] : "all",
      },
      {
        encodeValuesOnly: true,
      },
    ) as string;

    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?${queryParams}`;
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
    setPlatformsFilter(state: GamesState, action: PayloadAction<string>) {
      const { platforms } = state.filter;
      let newPlatforms: string[];

      if (platforms.includes(action.payload)) {
        newPlatforms = platforms.filter(
          (platform) => platform !== action.payload,
        );
      } else newPlatforms = [...platforms, action.payload];

      state.filter.platforms = newPlatforms;
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

export const { setPlatformsFilter } = gamesSlice.actions;
export default gamesSlice.reducer;
