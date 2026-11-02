import React from "react";

const experiencePoints = [
    "Worked with Indian and international clients on software development and AI prompt engineering projects.",
    "Built web applications and Spring Boot backend services, including third-party API integrations.",
    "Created and sold reusable prompts for image generation, video generation, and commercial content."
];

const About = () => (
    <section id="about" className="section about-section" aria-labelledby="about-title">
        <div className="section-inner">
            <div className="about-intro">
                <div>
                    <span className="section-kicker">01 / About</span>
                    <h2 id="about-title">
                        Building the bridge between <span className="gradient-text">ideas</span> and
                        <span className="gradient-text"> intelligent systems.</span>
                    </h2>
                </div>
                <div className="about-copy">
                    <p>
                        Full-stack developer and AI prompt engineer with freelance experience working with
                        Indian and international clients. I build web applications and backend services
                        using Java, Spring Boot, React, and MongoDB, and create reusable prompts for
                        image, video, and commercial content.
                    </p>
                    <div className="about-location"><span aria-hidden="true">⌖</span> Patna, Bihar, India</div>
                </div>
            </div>

            <div className="about-cards">
                <article className="info-card">
                    <div className="info-card-heading"><span aria-hidden="true">↗</span><h3>Experience</h3></div>
                    <div className="timeline-item">
                        <div className="timeline-heading">
                            <h4>Freelance Developer &amp; AI Prompt Engineer</h4>
                            <span>Independent / Remote</span>
                        </div>
                        <p className="timeline-company">Freelance</p>
                        <ul>{experiencePoints.map((point) => <li key={point}>{point}</li>)}</ul>
                    </div>
                </article>

                <article className="info-card education-card">
                    <div className="info-card-heading"><span aria-hidden="true">✦</span><h3>Education</h3></div>
                    <div className="education-item">
                        <div className="education-period">2025 – 2027 (Expected)</div>
                        <h4>Master of Computer Applications (MCA)</h4>
                        <p>Chandigarh University · Distance Learning</p>
                    </div>
                    <div className="education-item">
                        <div className="education-period">2021 – 2024</div>
                        <h4>Bachelor of Computer Applications (BCA)</h4>
                        <p>MGM College, Patna</p>
                    </div>
                </article>
            </div>
        </div>
    </section>
);

export default About;

