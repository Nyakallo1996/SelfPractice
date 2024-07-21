import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/create">CreatePost</Link>
        <Link to="/about">About</Link>
        <Link to="/auth">Login/Register</Link>
      </div>
    );
}