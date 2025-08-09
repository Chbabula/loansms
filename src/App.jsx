import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";
import LoanProviders from "./components/providers/LoanProviders";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Home />
      </div>
      <section id="contact" >
      <Contact />
      </section>
      {/* <section id="services"> */}
      <Services/>
      {/* </section> */}
      <LoanProviders/>
      <Footer/>
    </div>
  );
}

export default App;
