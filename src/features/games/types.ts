export interface IGame {
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

export interface GamesState {
  games: IGame[];
  status: "idle" | "loading" | "failed";
  filter: FilterGame;
}

export type FilterGame = {
  platform?: string;
  category?: string;
};
