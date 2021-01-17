import React, { useState, useEffect }  from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Casino from "./pages/Casino";
import NoMatch from "./pages/NoMatch";
<<<<<<< HEAD
import Members from "./pages/Members"
=======
import Members from "./pages/Members";
import "./App.css";

>>>>>>> b3e4debfae425e3c73727c9ff9be3ac7e20f2cb6

import Nav from "./components/Nav/Navbar";


function App() {

  const [authenticated, setAuth] = useState([false]);

  return (
    <Router>
      <div>
        <Nav />
<<<<<<< HEAD
        {/* <Home /> */}
=======
>>>>>>> b3e4debfae425e3c73727c9ff9be3ac7e20f2cb6
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
          <Route path ="/member" component = {Members} />
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
