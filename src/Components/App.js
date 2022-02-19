import React, { useState } from "react";

import NavBar from "./NavBar";
import Intro from "./Intro";
import Portfolio from "./Portfolio/Portfolio";
import Resume from "./Resume/Resume";
import Footer from "./Footer";
import NoMatch from "./NoMatch";

import { Container } from "react-bootstrap";

import { Routes, Route } from "react-router-dom";

import "../Styles/app.scss";

function App() {
  const [showComps, setShowComps] = useState(true);

  const toggleComps = () => {
    setShowComps(!showComps);
  };

  const seeComps = () => {
    setShowComps(true);
  };

  return (
    <Container fluid className="App p-0 h-100">
      <NavBar />
      <Intro />
      <Routes>
        <Route
          exact
          path="/"
          element={<Portfolio toggleComps={toggleComps} seeComps={seeComps} />}
        />
        <Route
          path="/resume"
          element={<Resume toggleComps={toggleComps} seeComps={seeComps} />}
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
