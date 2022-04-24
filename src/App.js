import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hello } from "./components/Hello";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// add the other pages to their own routes
// make sure each page is rendering the nav bar
