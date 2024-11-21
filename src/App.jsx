import React, { useRef, useState, useEffect } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Partners from "./sections/Partners";
import NewArrivals from "./sections/NewArrivals";
import Offers from "./sections/Offers";
import YoungFavourite from "./sections/YoungFavourite";
import DownloadApp from "./sections/DownloadApp";
import ShopingCommunity from "./sections/ShopingCommunity";
import Footer from "./sections/Footer";

const App = () => {
  const sectionRefs = {
    catalogue: useRef(null),
    fashion: useRef(null),
    favourite: useRef(null),
    lifestyle: useRef(null),
    offers: useRef(null),
  };

  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (id) => {
    sectionRefs[id]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // 60% of the section should be visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <>
      <Header scrollToSection={scrollToSection} activeSection={activeSection} />
      <main className="overflow-hidden">
        <section id="catalogue" ref={sectionRefs.catalogue}>
          <Hero />
        </section>
        <Partners />
        <section id="fashion" ref={sectionRefs.fashion}>
          <NewArrivals />
        </section>
        <section id="favourite" ref={sectionRefs.favourite}>
          <YoungFavourite />
        </section>
        <section id="offers" ref={sectionRefs.offers}>
          <Offers />
        </section>
        <DownloadApp />
        <section className="my-10" id="lifestyle" ref={sectionRefs.lifestyle}>
          <ShopingCommunity />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default App;
