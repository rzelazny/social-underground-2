import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav/Navbar";
// import  Casino from "./pages/Casino";

function App() {
  return (
<<<<<<< HEAD
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
=======
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
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
    // <Casino />
>>>>>>> main
  );
}

export default App;
