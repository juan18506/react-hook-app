import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <Link to="/react-hook-app/">Home</Link>
      <Link to="/react-hook-app/about">About</Link>
      <Link to="/react-hook-app/login">Login</Link>
    </>
  )
}
