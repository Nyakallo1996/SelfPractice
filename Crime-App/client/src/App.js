import "./App.css";
import Post from "./pages/post";

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">
          Crime_Posts
        </a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <Post/>
     
    </main>
  );
}

export default App;
