import React from "react";
import { useAuthTokenStore } from "./utils/auth";

import {BrowserRouter as Router, Route} from "react-router-dom";
import Register from "./pages/Register";

// import {useStoreContext} from "./store";

function App() {
  // const [store, dispatch] = useStoreContext();
  useAuthTokenStore();

    return (
          <div className="App">
            <Router>
              <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Register} />
                <Route exact path="/register" component={Register} />

              </div>
            </Router>
            
          </div>
    );

  }


export default App;
