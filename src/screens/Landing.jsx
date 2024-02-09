import React, { useState } from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import AboutUs from "../components/Sections/AboutUs";
import Services from "../components/Sections/Services";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import JsonBarberyData from "../data/barbery.json";
import JsonBarData from "../data/bar.json";

const busisnes = [JsonBarberyData, JsonBarData];

export default function Landing() {
  const [landingPageData, setLandingPageData] = useState(JsonBarberyData);
  const [busisnesNumber, setBusisnesNumber] = useState(0);

  const swicthBusines = () => {
    if (busisnesNumber < busisnes.length - 1) {
      setLandingPageData(busisnes[busisnesNumber + 1]);
      setBusisnesNumber(busisnesNumber + 1);
    } else {
      setLandingPageData(busisnes[0]);
      setBusisnesNumber(0);
    }
  };

  return (
    <>
      <TopNavbar
        swicthBusines={swicthBusines}
        name={landingPageData.header.name}
      />
      <Header data={landingPageData.header} />
      <AboutUs data={landingPageData.about} />
      <Services data={landingPageData.services} />
      <Blog data={landingPageData.testimonials} />
      <Pricing data={landingPageData.prices} />
      <Contact data={landingPageData.contact} />
      <Footer name={landingPageData.header.name} />
    </>
  );
}
