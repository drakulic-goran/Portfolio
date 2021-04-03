import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

// import BrowserDetect from './components/browserDetect/BrowserDetect';
// import Progress from './components/progress/Progress';
import Home from "./components/Home";
// import Resume from "./components/Resume";
import Timeline from "./components/Timeline";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Education from "./components/Education";
// import Contact from "./components/Contact";
import Contact from "./components/contact/Contact";

import "./App.css";


const App = (props) => {

  return (
    <React.Fragment>
      {/* <BrowserDetect></BrowserDetect>
      <Progress></Progress> */}
      <CssBaseline />
      <Router>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/resume" component={Resume} /> */}
            <Route exact path="/resume" component={Timeline} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/education" component={Education} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;