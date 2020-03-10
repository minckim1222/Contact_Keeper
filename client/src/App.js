import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Fragment className='App'>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
