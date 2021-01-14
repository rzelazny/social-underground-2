<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav/Navbar";
// import  Casino from "./pages/Casino";
=======
import React, { useState, useEffect }  from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Casino from "./pages/Casino";
import NoMatch from "./pages/NoMatch";


import Nav from "./components/Nav/Navbar";

>>>>>>> main

function App() {

  const [authenticated, setAuth] = useState([false]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/login"]}>
            <Login />
          </Route>
          <Route exact path={"/signup"}>
            <Signup />
          </Route>
<<<<<<< HEAD
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
    // <Casino />
=======
          <Route exact path={"/home"}>
            <Home />
          </Route>
          <Route exact path={"/casino"}>
            <Casino />
          </Route>
          <Route>
            <NoMatch />
          </Route>
          <Route path ="/casino" component = {Casino} />
        </Switch>
      </div>
    </Router>
>>>>>>> main
  );
}

export default App;
