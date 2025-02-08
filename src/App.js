import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AddHome from "./components/AddHome"; // Import the new page

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/add-home" element={<AddHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;