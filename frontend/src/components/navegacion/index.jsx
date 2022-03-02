import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="main-nav">
      <div className="main-nav__logo">
        <NavLink to="/">
          <span>Redes</span>
        </NavLink>
      </div>

      <ul className="main-nav__links">
        <li>
          <NavLink to="/">
            <span>Inicio</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/encuestas">
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
