import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import ProjectsCarousel from "../components/ProjectsCarousel";
import ContactPreview from "../components/ContactPreview";

const Home = () => (
    <div className="portfolio-home">
        <div className="ambient-glow ambient-glow-one" aria-hidden="true" />
        <div className="ambient-glow ambient-glow-two" aria-hidden="true" />
        <div className="grain-layer" aria-hidden="true" />
        <div className="main-content">
            <Hero />
            <About />
            <Skills />
            <ProjectsCarousel />
            <ContactPreview />
        </div>
    </div>
);

export default Home;
