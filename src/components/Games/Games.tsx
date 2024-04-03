import styles from "./Games.module.css";
import Game from "../Game/Game.tsx";
import { fetchGames } from "../../features/games/gamesSlice.ts";
import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { useEffect } from "react";

const Games = () => {
  const dispatch = useAppDispatch();
  const games = useAppSelector((state) => state.games.games);
  const status = useAppSelector((state) => state.games.status);

  useEffect(() => {
    void dispatch(fetchGames());
  }, [dispatch]);

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
