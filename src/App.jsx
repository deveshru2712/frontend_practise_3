import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Banner />
    </>
  );
};

export default App;
