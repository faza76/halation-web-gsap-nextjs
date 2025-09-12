import "./App.css";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ReactLenis } from "@studio-freight/react-lenis";
import Header from './components/Header/Header'; 

import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";

function App() {
  const location = useLocation();

  return (
    <ReactLenis root>
      <div className="app">
        {/* <Header /> */}
        {/* <AnimatePresence mode="wait" initial={false}> */}
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        {/* </AnimatePresence> */}
      </div>
    </ReactLenis>
  );
}

export default App;
