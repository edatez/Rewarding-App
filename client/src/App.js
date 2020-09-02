import React from "react";
import { useAuthTokenStore } from "./utils/auth";

import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";

import {useStoreContext} from "./store";
import Navbar from "./components/navbar"
import Footer from "./components/footer";
import Dashboard from "./pages/Dashboard";
import CreateActivities from "./pages/CreateActivities";
import CreateRewards from "./pages/CreateRewards";

function App() {
  
  useAuthTokenStore();

    return (
          <div className="App">
          <Navbar></Navbar>
            <Router>
              <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/create-activities" component={CreateActivities} />
                <Route exact path="/create-rewards" component={CreateRewards} />                
                <Route exact path="/about" component={About} />
              </div>
            </Router>

            <Footer></Footer>
            
          </div>
    );

  }


export default App;
