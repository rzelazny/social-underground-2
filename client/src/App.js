import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav/Navbar";

function App() {
  return (
    <Home />
    // <Router>
    //   <div>
    //     <Nav />
    //     <Switch>
    //       <Route exact path={["/", "/login"]}>
    //         <Login />
    //       </Route>
    //       <Route exact path={"/signup"}>
    //         <Signup />
    //       </Route>
    //       <Route>
    //         <NoMatch />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
