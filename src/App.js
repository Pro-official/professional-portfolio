import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Details from "./pages/Home/projects/Details";
import Details2 from "./pages/Home/projects/Details2";
import Details3 from "./pages/Home/projects/Details3";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/details/1">
            <Details></Details>
          </Route>
          <Route path="/details/2">
            <Details2></Details2>
          </Route>
          <Route path="/details/3">
            <Details3></Details3>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
