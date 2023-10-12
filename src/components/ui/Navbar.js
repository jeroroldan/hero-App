import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

      <Link
        className="navbar-brand"
        to="/"
      >
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">

          <NavLink
            className="nav-item nav-link"
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className="nav-item nav-link"
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            to="/heroFiltered"
          >
            Filter Hero
          </NavLink>
        </div>
      </div>

      <div className="">
        <ul className="navbar-nav">
          <NavLink
            className="nav-item nav-link"
            to="/login"
          >
            Logout
          </NavLink>
        </ul>
      </div>
    </nav>
  )
}