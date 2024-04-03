import styles from "./Game.module.css";
// import image from "../../../public/fall_guys_image.png";
import platformSvg from "../../../public/windows_logo.svg";
import type { Game } from "../../features/games/gamesSlice.ts";
import { FC } from "react";

interface GameProps {
  game: Game;
}

const Game: FC<GameProps> = ({ game }) => {
  console.log(game);
  return (
    <li className={styles.game}>
      <img className={styles.game__image} src={game.thumbnail} alt="game" />
      <div className={styles.game__belowContainer}>
        <div className={styles.game__container}>
          <h3 className={styles.game__title}>{game.title}</h3>
          <p className={styles.game__freeText}>FREE</p>
        </div>
        <p className={styles.game__description}>{game.short_description}</p>
        <div className={styles.game__container}>
          <p className={styles.game__gender}>{game.genre}</p>
          <img
            src={platformSvg}
            className={styles.game__platform}
            alt={game.platform}
          />
        </div>
      </div>
    </li>
  );
};

export default Game;
