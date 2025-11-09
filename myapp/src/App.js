import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/skill" element={<Skills />}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
