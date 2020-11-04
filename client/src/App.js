import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import AboutMe from "./pages/AboutMe/AboutMe";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route exact path="/AboutMe" component={AboutMe} />
            <Route exact path="/Portfolio" component={Portfolio} />
            <Route exact path="/Contact" component={Contact} />
            {/* example rendering component and passing props to it */}
            {/* <Route
              exact
              path="/Contact"
              render={(props) => <Contact PropName={"some value"} />}
            /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
