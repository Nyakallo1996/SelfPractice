import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from './pages/home';
import { Auth } from './pages/auth';
import { Create } from './pages/create';
import { Save } from './pages/save';
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/auth" element={<Auth/>} />
          <Route path="/create" element={<Create/>} />
          <Route path="/save" element={<Save/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
