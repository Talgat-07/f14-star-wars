import { Link, NavLink } from "react-router";
import styles from "../styles/Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logo}>
          <img
            src="https://img.icons8.com/?size=100&id=69493&format=png&color=000000"
            alt="logo star wars"
          />
        </div>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to="/people"
            >
              People
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to="/search"
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to="/*"
            >
              Not Found
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to="/fail"
            >
              Fail
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.favorite}>
        <Link to="/favorite">
          <img
            src="https://img.icons8.com/?size=100&id=26083&format=png&color=C90090"
            alt="icon favorite"
          />
        </Link>
      </div>
    </header>
  );
};
