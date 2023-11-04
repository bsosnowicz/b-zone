import { Link, useLocation } from "react-router-dom";
import css from "./Navigation.module.css";
import React, { useEffect, useState } from "react";

const Navigation = () => {
  const [currentLocation, setCurrentLocation] = useState("");

  let location = useLocation();

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location]);

  return (
    <div id="navigation" className={css.NavigationContainer}>
      <ul className={css.NavigationItemList}>
        <li>
          <Link
            className={css.NavigationItem}
            style={currentLocation === "/home" ? { color: "#b9272d" } : {}}
            to={`/home`}
          >
            <svg
              className={css.NavigationitemIcon}
              style={currentLocation === "/home" ? { opacity: 1 } : {}}
              width="24"
              height="16"
            >
              <use href="../../../boxing.svg#boxing"></use>
            </svg>
            TRENING
          </Link>
          <p
            className={css.NavigationItemSpan}
            style={currentLocation === "/home" ? { opacity: 1 } : {}}
          />
        </li>
        <li>
          <Link
            className={css.NavigationItem}
            style={currentLocation === "/aboutus" ? { color: "#b9272d" } : {}}
            to={`/aboutus`}
          >
            <svg
              className={css.NavigationitemIcon}
              style={currentLocation === "/aboutus" ? { opacity: 1 } : {}}
              width="24"
              height="24"
            >
              <use href="../../../info.svg#info"></use>
            </svg>
            O NAS
          </Link>
          <p
            className={css.NavigationItemSpan}
            style={currentLocation === "/aboutus" ? { opacity: 1 } : {}}
          />
        </li>
        <li>
          <Link
            className={css.NavigationItem}
            style={currentLocation === "/schedule" ? { color: "#b9272d" } : {}}
            to={`/schedule`}
          >
            <svg
              className={css.NavigationitemIcon}
              style={currentLocation === "/schedule" ? { opacity: 1 } : {}}
              width="24"
              height="24"
            >
              <use href="../../../calendar.svg#calendar"></use>
            </svg>
            HARMONOGRAM ZAJĘĆ
          </Link>
          <p
            className={css.NavigationItemSpan}
            style={currentLocation === "/schedule" ? { opacity: 1 } : {}}
          />
        </li>
        <li>
          <Link
            className={css.NavigationItem}
            style={currentLocation === "/pricelist" ? { color: "#b9272d" } : {}}
            to={`/pricelist`}
          >
            <svg
              className={css.NavigationitemIcon}
              style={currentLocation === "/pricelist" ? { opacity: 1 } : {}}
              width="24"
              height="24"
            >
              <use href="../../../coins.svg#coins"></use>
            </svg>
            CENNIK
          </Link>
        </li>
        <li>
          <Link to={"/gallery"}>GALERIA</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
