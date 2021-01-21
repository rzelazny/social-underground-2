import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Casino from "./pages/Casino";
import NoMatch from "./pages/NoMatch";
import Members from "./pages/Members";
import "./App.css";


function App() {

  //const [authenticated, setAuth] = useState([false]);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/login"]}>
            <Login />
          </Route>
          <Route exact path={"/signup"}>
            <Signup />
          </Route>
          <Route exact path={"/home"}>
            <Home />
          </Route>
          <Route path={"/casino"}>
            <Casino />
          </Route>
          <Route path ="/members" component = {Members} />
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
