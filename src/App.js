import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Categories from "./components/Categories/Categories";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/categories" component={Categories}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
