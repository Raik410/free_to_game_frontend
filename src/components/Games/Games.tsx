import styles from "./Games.module.css";
import Game from "../Game/Game.tsx";
import { fetchGames } from "../../features/games/gamesSlice.ts";
import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { useEffect } from "react";
import { GamesState } from "../../features/games/types.ts";

const Games = () => {
  const dispatch = useAppDispatch();
  const platformFilter = useAppSelector((state: { games: GamesState }) => {
    return state.games.filter.platform;
  });
  const games = useAppSelector((state) => state.games.games);
  const status = useAppSelector((state) => state.games.status);

  useEffect(() => {
    if (platformFilter != null) {
      void dispatch(fetchGames(platformFilter));
    }
  }, [dispatch, platformFilter]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Failed</div>;

  return (
    <ul className={styles.games}>
      {games.map((game) => (
        <Game key={game.id} game={game} />
      ))}
    </ul>
  );
};

export default Games;
