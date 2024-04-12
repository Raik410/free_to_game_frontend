import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { options } from "../../api/api.ts";
import { IGame, GamesState, FilterGame } from "./types.ts";
import qs from "qs";

const initialState: GamesState = {
  games: [],
  status: "idle",
  filter: {
    platforms: [], // pc, browser
    categorys: [],
  },
};

export const fetchGames = createAsyncThunk<IGame[], FilterGame>(
  "games/fetchGames",
  async (gamesFilter: FilterGame) => {
    const { platforms, categorys } = gamesFilter;

    const queryParams = qs.stringify(
      {
        platform: platforms.length === 1 ? platforms[0] : "all",
        category: categorys,
      },
      {
        arrayFormat: "repeat",
        encodeValuesOnly: true,
      },
    );

    console.log(queryParams);

    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?${queryParams}`;
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return (await response.json()) as Promise<IGame[]>;
  },
);

// const gamesSlice = createSlice({
//   name: "games",
//   initialState,
//   reducers: {
//     setPlatformsFilter(state: GamesState, action: PayloadAction<string>) {
//       const { platforms } = state.filter;
//       let newPlatforms: string[];

//       if (platforms.includes(action.payload)) {
//         newPlatforms = platforms.filter(
//           (platform) => platform !== action.payload,
//         );
//       } else newPlatforms = [...platforms, action.payload];

//       state.filter.platforms = newPlatforms;
//     },
//     setCategoryFilter(state: GamesState, action: PayloadAction<string>) {
//       const { categorys } = state.filter;
//       let newCategorys: string[];

//       if (categorys.includes(action.payload)) {
//         newCategorys = categorys.filter(
//           (category) => category !== action.payload,
//         );
//       } else newCategorys = [...categorys, action.payload];

//       state.filter.categorys = newCategorys;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchGames.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchGames.fulfilled, (state, action) => {
//         state.status = "idle";
//         state.games = action.payload;
//       })
//       .addCase(fetchGames.rejected, (state) => {
//         state.status = "failed";
//       });
//   },
// });

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    toogleFilter(
      state: GamesState,
      action: PayloadAction<{ type: string; value: string }>,
    ) {
      const { type, value } = action.payload;

      let currentFilter: string[] = state.filter[type as keyof FilterGame];
      if (currentFilter.includes(value)) {
        currentFilter = currentFilter.filter((item) => item !== value);
      } else {
        currentFilter = [...currentFilter, value];
      }
      state.filter[type as keyof FilterGame] = currentFilter;
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

export const { toogleFilter } = gamesSlice.actions;
export default gamesSlice.reducer;
