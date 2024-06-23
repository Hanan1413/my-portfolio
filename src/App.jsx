import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About"
import Skills from "./components/skills/Skills";
import {data, skillsData} from "./data/data";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/projects" element={<Projects projectsData={data}/>}></Route>

        <Route path="/about" element={<About />}></Route>

        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/skills" element={<Skills  skillsData={skillsData}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
