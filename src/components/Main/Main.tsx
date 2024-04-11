import styles from "./Main.module.css";
import Games from "../Games/Games.tsx";
import Filters from "../Filters/Filters.tsx";

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.main__aboveContainer}>
        <h3 className={styles.main__text}>
          Find and filter free-to-play games your way!{" "}
        </h3>
        <p className={styles.main__clearFilter}>Clear Filters</p>
      </div>
      <div className={styles.main__box}>
        <Filters />
        <Games />
      </div>
    </main>
  );
};

export default Main;
