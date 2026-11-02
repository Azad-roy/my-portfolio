import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
    const { pathname } = useLocation();
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <Link to="/" className="footer-brand">AZAD<span>.DEV</span></Link>
                <div className="footer-links" aria-label="Footer links">
                    <Link to="/projects">Projects</Link>
                    <Link to="/prompts">Prompts</Link>
                    <Link to="/worlds/palinode-7">PALINODE // 7</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <p>© {new Date().getFullYear()} Azad Kumar · Patna, India</p>
                <Link className="back-to-top" to={pathname === "/" ? "#home" : "/"}>Portfolio home ↑</Link>
            </div>
        </footer>
    );
};

export default Footer;
