import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="main-nav">
      <div className="main-nav__logo">
        <NavLink to="/">
          <span>Redes Sociales</span>
        </NavLink>
      </div>

      <ul className="main-nav__links">
        <li>
          <NavLink to="/">
            <span>Encuesta</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/estadisticas">
            <span>Estadisticas</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
