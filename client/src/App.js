import React, { useState, useEffect }  from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Casino from "./pages/Casino";
import NoMatch from "./pages/NoMatch";


import Nav from "./components/Nav/Navbar";

function App() {

  const [authenticated, setAuth] = useState([false]);

  return (
    <Router>
      <div>
        <Nav />
        <Home />
        <Switch>
          {/* <Route exact path={["/", "/login"]}>
            <Login />
          </Route>
          <Route exact path={"/signup"}>
            <Signup />
          </Route>
          <Route>
            <NoMatch />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
