import React from "react";
import { useAuthTokenStore } from "./utils/auth";

import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";

import {useStoreContext} from "./store";
import Footer from "./components/footer";
import Dashboard from "./pages/Dashboard";
import CreateActivities from "./pages/CreateActivities";
import CreateRewards from "./pages/CreateRewards";
import AddPoints from "./pages/AddPoints";
import RedeemRewards from "./pages/RedeemRewards";

function App() {
  
  useAuthTokenStore();

    return (
          <div className="App">
            <Router>
              <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/create-activities" component={CreateActivities} />
                <Route exact path="/create-rewards" component={CreateRewards} />
                <Route exact path="/add-points" component={AddPoints} />
                <Route exact path="/redeem-rewards" component={RedeemRewards} />                
                <Route exact path="/about" component={About} />
              </div>
            </Router>

            <Footer></Footer>
            
          </div>
    );

  }


export default App;
