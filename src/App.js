import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";
import Contact from "./components/pages/Contact";
import Work from "./components/pages/Work";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="page-container">
        <div className="content-wrap">
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/work" component={Work} />
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
