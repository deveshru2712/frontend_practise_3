import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Store from "./components/Store/Store";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <Store />
    </>
  );
};

export default App;
