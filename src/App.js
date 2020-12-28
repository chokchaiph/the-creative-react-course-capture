import React from "react";
import AboutUs from "./pages/AboutUs";
//import GlobalStyle
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
<<<<<<< HEAD
import OurWork from "./components/OurWork";
import ContactUs from "./components/ContactUs";

import { Switch, Route } from "react-router-dom";
=======
>>>>>>> a686c0d71181c44eb19947eabe8a74f411d13182

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
<<<<<<< HEAD
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
=======
      <AboutUs />
>>>>>>> a686c0d71181c44eb19947eabe8a74f411d13182
    </div>
  );
}

export default App;
