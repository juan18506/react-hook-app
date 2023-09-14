import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => `nav-link ${ isActive ? 'active': '' }`}
              to="/react-hook-app/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => `nav-link ${ isActive ? 'active': '' }`}
              to="/react-hook-app/about"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => `nav-link ${ isActive ? 'active': '' }`}
              to="/react-hook-app/login"
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}