import React, { useState } from "react";
import {Helmet} from "react-helmet";
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
      <Helmet>
        <meta charset="UTF-8"/>
        <meta name="google-site-verification" content="UlIego5vQwbkQ6C0WqtRYLjQL8yv8Hl4btn5K_Uszeg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Barbería de alta calidad en [Ubicación], especializada en cortes de cabello modernos, afeitados y cuidado de la barba."/>
        <meta name="keywords" content="barbería, corte de cabello, afeitado, cuidado de la barba, barbería en [Ubicación]"/>
        <meta name="author" content="Barbería [Nombre de la barbería]"/>
        
        {/* Open Graph para redes sociales */}
        <meta property="og:title" content="Barbería [Nombre de la barbería] - Corte y Estilo en [Ubicación]"/>
        <meta property="og:description" content="Descubre nuestros servicios de alta calidad en cortes de cabello, afeitados y cuidado de barba en [Ubicación]. Agenda tu cita hoy."/>
        <meta property="og:image" content="[URL-de-la-imagen]"/>
        <meta property="og:url" content="https://www.tubarberia.com"/>
        <meta property="og:type" content="website"/>
        {/* Meta para Twitter */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Barbería [Nombre de la barbería] - Corte y Estilo en [Ubicación]"/>
        <meta name="twitter:description" content="Visítanos para un corte de calidad en un ambiente acogedor."/>
        <meta name="twitter:image" content="[URL-de-la-imagen]"/>
        {/* SEO Loca */}
        <meta name="geo.region" content="MX-DF"/>
        <meta name="geo.placename" content="[Nombre de la Ciudad]"/>
        <meta name="geo.position" content="19.432608;-99.133209"/>
        <meta name="ICBM" content="19.432608, -99.133209"/>
  
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
