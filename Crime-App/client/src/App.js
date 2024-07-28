import "./App.css";
import Post from "./pages/post";
import Header from "./header/header";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <main>
            <Header />
            <Post />
            <Post />
            <Post />
          </main>
        }
      />
    </Routes>
  );
}

export default App;
