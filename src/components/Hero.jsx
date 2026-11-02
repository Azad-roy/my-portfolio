import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight, HiSparkles } from "react-icons/hi";
import profilePic from "../assets/profile_photo/pfp.png";

const Hero = () => (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="hero-content">
            <div className="hero-badge"><span className="hero-badge-dot" /> Available for freelance projects</div>
            <p className="hero-overline">Full-stack developer · AI prompt engineer</p>
            <h1 id="hero-title">
                <span className="hero-name">Azad Kumar</span>
                <span className="hero-role">Building thoughtful digital experiences</span>
            </h1>
            <p className="hero-tagline">Code, creativity, and useful AI.</p>
            <p className="hero-summary">
                I build web applications and backend services with Java, Spring Boot, React, and MongoDB,
                and create reusable prompts for image and video workflows.
            </p>
            <div className="hero-actions">
                <a className="button-primary" href="#projects">Explore my work <HiArrowRight aria-hidden="true" /></a>
                <Link className="button-secondary" to="/prompts"><HiSparkles aria-hidden="true" /> Explore AI prompts</Link>
            </div>
            <div className="hero-socials">
                <img className="hero-avatar" src={profilePic} alt="" />
                <a href="https://github.com/Azad-roy" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                <span />
                <a href="https://www.linkedin.com/in/azad-kumar-b358a026b/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            </div>
        </div>
        <a className="scroll-cue" href="#about" aria-label="Scroll to about section"><span /></a>
        <div className="hero-side-note">PATNA, INDIA · 25°36′N 85°08′E</div>
    </section>
);

export default Hero;
