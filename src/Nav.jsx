import { useState } from "react";
import { NavLink, useMatch } from "react-router-dom";
import navIcon from "./assets/navIcon.svg";
import "./Nav.css";

const links = [
  { label: "home", to: "/" },
  { label: "about", to: "/about" },
  { label: "work", to: "/work" },
  { label: "contact", to: "/contact" },
];

function NavItem({ label, to }) {
  const match = useMatch(to === "/" ? { path: "/", end: true } : to);

  return (
    <li className="nav-link-item">
      <NavLink
        to={to}
        end={to === "/"}
        className={({ isActive }) =>
          `nav-link${isActive ? " nav-link--active" : ""}`
        }
      >
        {label}
      </NavLink>
      <span className={`nav-dot${match ? " nav-dot--visible" : ""}`} />
    </li>
  );
}

function Nav() {
  const [hovered, setHovered] = useState(false);

  return (
    <nav className="nav">
      <div
        className={`nav-pill ${hovered ? "nav-pill--open" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={navIcon}
          alt="menu"
          className={`nav-icon ${hovered ? "nav-icon--hidden" : ""}`}
        />
        <ul className={`nav-links ${hovered ? "nav-links--visible" : ""}`}>
          {links.map((link) => (
            <NavItem key={link.label} {...link} />
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
