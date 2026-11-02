import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowNarrowRight, HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const onHome = location.pathname === "/";
    const links = [
        { label: "Home", path: onHome ? "#home" : "/" },
        { label: "About", path: onHome ? "#about" : "/#about" },
        { label: "Skills", path: onHome ? "#skills" : "/#skills" },
        { label: "Projects", path: onHome ? "#projects" : "/#projects" },
        { label: "Prompts", path: "/prompts" },
    ];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => setIsOpen(false), [location.pathname, location.hash]);

    useEffect(() => {
        if (location.pathname !== "/" || !location.hash) return undefined;
        const targetId = decodeURIComponent(location.hash.slice(1));
        const frame = window.requestAnimationFrame(() => {
            const target = document.getElementById(targetId);
            if (target) {
                const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
            }
        });
        return () => window.cancelAnimationFrame(frame);
    }, [location.pathname, location.hash]);

    return (
        <motion.header
            className={"site-header" + (isScrolled ? " is-scrolled" : "")}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            <nav className="nav-inner" aria-label="Main navigation">
                <Link className="brand-mark" to="/" aria-label="Azad Kumar home">
                    <span className="brand-symbol">A</span><span>AZAD<span className="brand-mark-accent">.DEV</span></span>
                </Link>
                <div className="desktop-nav-links">
                    {links.map((link) => <Link key={link.label} to={link.path}>{link.label}</Link>)}
                </div>
                <Link className="nav-contact" to="/contact">Let’s talk <HiArrowNarrowRight aria-hidden="true" /></Link>
                <button
                    className="menu-toggle"
                    type="button"
                    onClick={() => setIsOpen((open) => !open)}
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                >
                    {isOpen ? <HiX aria-hidden="true" /> : <HiMenu aria-hidden="true" />}
                </button>
                {isOpen && (
                    <div className="mobile-nav" id="mobile-navigation">
                        {links.map((link, index) => (
                            <Link key={link.label} to={link.path} onClick={() => setIsOpen(false)}>
                                <span>{String(index + 1).padStart(2, "0")}</span>{link.label}
                            </Link>
                        ))}
                        <Link to="/contact" onClick={() => setIsOpen(false)}><span>06</span>Contact</Link>
                    </div>
                )}
            </nav>
        </motion.header>
    );
};

export default Navbar;
