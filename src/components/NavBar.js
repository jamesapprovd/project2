import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <Link to="/introduction">Introduction</Link>
          </li>
          <li>
            <Link to="/sanctiontypes">Sanction Types</Link>
          </li>
          <li>
            <Link to="/disclaimer">Disclaimer</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
