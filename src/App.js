import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import Dashboard  from "./Dashboard";
import ProtectedRoute from "./protectedRoute";
import Auth from "./Auth";
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Auth />
      <BrowserRouter >
        <Switch>
          <Route exact path="/" component={Home} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
