import React from "react";
import { useAuthTokenStore, useIsAuthenticated } from "./utils/auth";

import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Settings from "./pages/Settings";

import Navbar from "./components/navbar"
import Footer from "./components/footer";
import Dashboard from "./pages/Dashboard";
import CreateActivities from "./pages/CreateActivities";
import CreateRewards from "./pages/CreateRewards";
import AddPoints from "./pages/AddPoints";
import RedeemRewards from "./pages/RedeemRewards";
import "./App.sass";
import AddChildren from "./pages/AddChildren";

function App() {

  const isAuth = useIsAuthenticated()
  
  useAuthTokenStore();
  

    return (
          <div className="App">
          
            <Router>
            <Navbar></Navbar>
              <div className="mainContent">
                {
                  isAuth
                    ? <Route exact path="/" component={Dashboard} />
                    
                    : <Route exact path="/" component={Home} />
                }
                {/* <Route exact path="/" component={Dashboard} /> */}
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/add-children" component={AddChildren} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/create-activities" component={CreateActivities} />
                <Route exact path="/create-rewards" component={CreateRewards} />
                <Route exact path="/add-points" component={AddPoints} />
                <Route exact path="/redeem-rewards" component={RedeemRewards} />                
                <Route exact path="/about" component={About} />
                <Route exact path="/settings" component={Settings} />
                <Footer></Footer>
              </div>
            </Router>

            
            
          </div>
    );

}


export default App;
