import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <a href="" className="logo">
        Crime_Posts
      </a>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}
