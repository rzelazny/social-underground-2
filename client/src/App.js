import React, { useState, useEffect }  from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
//import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Casino from "./pages/Casino";

import Nav from "./components/Nav/Navbar";
//import isAuth from "./components/IsAuth/isAuth";
const isAuth = require("./components/IsAuth/isAuth");

function App() {

  const [authenticated, setAuth] = useState([false]);

  fetch("/api/login",{
    method: "post"
  })
  .then((data)=>{
    console.log("data", data);
    if(data.status===200) setAuth(true);
      
  })
  .catch((err)=> console.log(err))

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
          <Route exact path={"/home"}>
            {console.log("loggedIn", authenticated)}
            {authenticated ?  <Casino /> : <Login />}
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
    // <Casino />
  );
}

export default App;
