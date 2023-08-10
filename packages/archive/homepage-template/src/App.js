import "./App.css";
import "normalize.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/home";
import About from "./pages/about";
import News from "./pages/news";
import Photo from "./pages/photo";
import Video from "./pages/video";

import { Header } from "@vjbhang/shared-components";

function App() {
  return (
    <Router>
      <Header />
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/video">
            <Video />
          </Route>
          <Route path="/photo">
            <Photo />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
