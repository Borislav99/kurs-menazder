import React from "react";
import {
  Header,
  Sidebar,
  Landing,
  About,
  Business,
  Features,
  Examples,
  Contact,
  Footer,
} from "../components/Homepage";
import { HomepageProvider } from "../context/homepage_context";
const Homepage = () => {
  return (
    <>
      <HomepageProvider>
        <Header />
        <Sidebar />
        <Landing />
        <About />
        <Business />
        <Features />
        <Examples />
        <Contact />
        <Footer />
      </HomepageProvider>
    </>
  );
};

export default Homepage;
