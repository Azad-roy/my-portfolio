import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight, HiMail } from "react-icons/hi";

const ContactPreview = () => (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
        <div className="section-inner">
            <div className="contact-card">
                <div className="contact-orb" aria-hidden="true" />
                <div className="contact-copy">
                    <span className="section-kicker">04 / Contact</span>
                    <h2 id="contact-title">Have a project in mind?</h2>
                    <p>For development or prompt engineering work, get in touch and tell me what you’re building.</p>
                    <div className="contact-location"><span aria-hidden="true">⌖</span> Patna, Bihar, India</div>
                </div>
                <div className="contact-actions">
                    <a className="button-primary contact-email" href="mailto:azadr1233@gmail.com">
                        <HiMail aria-hidden="true" /> <span>azadr1233@gmail.com</span> <HiArrowRight aria-hidden="true" />
                    </a>
                    <div className="social-links">
                        <a href="https://github.com/Azad-roy" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                        <a href="https://www.linkedin.com/in/azad-kumar-b358a026b/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                    </div>
                    <Link className="contact-form-link" to="/contact">Open the contact form <HiArrowRight aria-hidden="true" /></Link>
                </div>
            </div>
        </div>
    </section>
);

export default ContactPreview;

