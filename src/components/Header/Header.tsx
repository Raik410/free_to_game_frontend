import styles from "./Header.module.css";
import logo from "../../../public/logo_header.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.header__logo} alt="logo" />
      <Link className={styles.header__link} to="/films">
        Games
      </Link>
    </header>
  );
};

export default Header;
