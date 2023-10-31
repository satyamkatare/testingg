import React from "react";
import Navbar from "./Components/Navbar";
import ContactUs from "./Components/ContactUs";
import BoxContainer from "./Components/BoxContainer";
import Heading from "./Components/Heading";
import About from "./Components/About";
import Subhead from "./Components/Subhead";
import { Switch, Route } from "react-router-dom";
import Product from './Components/Product';
import Team from './Components/Team'
import Footer from "./Components/Footer";
import ProductContainer1 from "./Components/ProductContainer1";
import ProductContainer2 from "./Components/ProductContainer2";
import ProductContainer3 from "./Components/ProductContainer3";
import ProductContainer4 from "./Components/ProductContainer4";



export default function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Subhead />
          <Heading />
          <BoxContainer />
          <Footer/>
        </Route>
        <Route exact path="/home">
          <Subhead />
          <Heading />
          <BoxContainer />
          <Footer/>
        </Route>
        <Route exact path="/contactUs">
          <Subhead />
          {/* <Heading /> */}
          <ContactUs />
          {/* <Footer/> */}
        </Route>
        <Route exact path="/aboutUs">
          <About />
          <Footer/>
        </Route> 
        <Route exact path="/products1">
          <Subhead/>
         <ProductContainer1/>
          <Footer/>
        </Route> 
        <Route exact path="/products2">
        <Subhead/>
         <ProductContainer2/>
          <Footer/>
        </Route> 
        <Route exact path="/products3">
        <Subhead/>
         <ProductContainer3/>
          <Footer/>
        </Route> 
        <Route exact path="/products4">
        <Subhead/>
         <ProductContainer4/>
          <Footer/>
        </Route> 
        <Route exact path="/team">
          <Team/>
          <Footer/>

        </Route> 
      </Switch>

    </div>
  );
}

