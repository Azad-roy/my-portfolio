import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiArrowRight, HiChatAlt2, HiPhone } from "react-icons/hi";
import projectsData from "../data/projects.json";

const projects = projectsData.projects.filter((project) => project.featured);

function getOffset(index, active, count) {
    if (count <= 1 || index === active) return 0;
    if (count === 2) return active === 0 ? 1 : -1;

    let offset = index - active;
    if (offset > count / 2) offset -= count;
    if (offset < -count / 2) offset += count;
    return offset;
}

const ProjectArtwork = ({ project }) => (
    <div className={"project-art " + (project.art === "messaging" ? "project-art-message" : "project-art-voice")} aria-hidden="true">
        <div className="project-art-topline">
            <span className="art-brand"><span /> AZAD / LAB</span>
            <span className="art-label">{project.art === "voice" ? "VOICE SYSTEM" : "MESSAGING SYSTEM"}</span>
        </div>

        {project.art === "voice" ? (
            <div className="voice-art">
                <div className="voice-orbit voice-orbit-one" />
                <div className="voice-orbit voice-orbit-two" />
                <div className="voice-core"><HiPhone aria-hidden="true" /></div>
                <div className="voice-wave"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
                <span className="voice-caption">AI CALLING AGENT</span>
            </div>
        ) : (
            <div className="message-art">
                <div className="chat-sidebar">
                    <span className="chat-avatar avatar-cyan" />
                    <span className="chat-avatar avatar-violet" />
                    <span className="chat-avatar avatar-pink" />
                    <span className="chat-avatar avatar-blue" />
                </div>
                <div className="chat-window">
                    <div className="chat-window-header">
                        <span className="chat-avatar avatar-violet" />
                        <span><b>Project team</b><small>messaging workflow</small></span>
                        <HiChatAlt2 aria-hidden="true" />
                    </div>
                    <div className="chat-bubble chat-bubble-in">The new build is ready.</div>
                    <div className="chat-bubble chat-bubble-out">Sharing it now ✨</div>
                    <div className="chat-attachment"><span /> media sharing <small>available</small></div>
                </div>
            </div>
        )}
    </div>
);

const ProjectsCarousel = () => {
    const [active, setActive] = useState(0);
    const pointerStart = useRef(null);
    const count = projects.length;
    const move = (direction) => {
        if (count < 2) return;
        setActive((current) => (current + direction + count) % count);
    };

    const handleKeyDown = (event) => {
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            move(-1);
        } else if (event.key === "ArrowRight") {
            event.preventDefault();
            move(1);
        }
    };

    const handlePointerDown = (event) => {
        if (event.target.closest("button, a")) return;
        pointerStart.current = event.clientX;
        try { event.currentTarget.setPointerCapture(event.pointerId); } catch (_) {}
    };

    const handlePointerUp = (event) => {
        if (pointerStart.current === null) return;
        const distance = event.clientX - pointerStart.current;
        pointerStart.current = null;
        if (Math.abs(distance) > 45) move(distance < 0 ? 1 : -1);
    };

    return (
        <section id="projects" className="section projects-section" aria-labelledby="projects-title">
            <div className="section-inner">
                <div className="section-heading">
                    <span className="section-kicker">03 / Selected work</span>
                    <h2 id="projects-title">Projects built with <span className="gradient-text">purpose</span></h2>
                    <p>Two practical applications combining full-stack development and thoughtful workflows.</p>
                </div>

                <div
                    className="coverflow-stage"
                    role="region"
                    aria-label="Project carousel"
                    aria-roledescription="carousel"
                    aria-keyshortcuts="ArrowLeft ArrowRight"
                    tabIndex={0}
                    onKeyDown={handleKeyDown}
                    onPointerDown={handlePointerDown}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={() => { pointerStart.current = null; }}
                >
                    <div className="coverflow-cards">
                        {projects.map((project, index) => {
                            const offset = getOffset(index, active, count);
                            const isActive = offset === 0;
                            const distance = Math.abs(offset);
                            return (
                                <motion.article
                                    key={project.id}
                                    className={"project-card" + (isActive ? " is-active" : " is-side")}
                                    role="group"
                                    aria-roledescription="slide"
                                    aria-label={project.name + ", " + (index + 1) + " of " + count}
                                    aria-hidden={!isActive}
                                    animate={{
                                        x: (offset * 54) + "%",
                                        z: isActive ? 0 : -210,
                                        rotateY: offset * -24,
                                        scale: isActive ? 1 : 0.82,
                                        opacity: distance > 1 ? 0 : isActive ? 1 : 0.48
                                    }}
                                    transition={{ type: "spring", stiffness: 150, damping: 24 }}
                                    style={{ zIndex: 10 - distance, pointerEvents: isActive ? "auto" : "none" }}
                                >
                                    <ProjectArtwork project={project} />
                                    <div className="project-card-body">
                                        <div className="project-card-meta">
                                            <span>{project.art === "voice" ? "Backend / AI" : "Web / Android"}</span>
                                            <span>{String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}</span>
                                        </div>
                                        <h3>{project.name}</h3>
                                        <p>{project.description}</p>
                                        <ul className="tech-list" aria-label="Technologies">
                                            {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                                        </ul>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>

                <div className="carousel-controls">
                    <button type="button" className="carousel-arrow" onClick={() => move(-1)} aria-label="Previous project">
                        <HiArrowLeft aria-hidden="true" />
                    </button>
                    <div className="carousel-dots" role="group" aria-label="Choose a project">
                        {projects.map((project, index) => (
                            <button
                                key={project.id}
                                type="button"
                                className={"carousel-dot" + (index === active ? " is-active" : "")}
                                onClick={() => setActive(index)}
                                aria-label={"Show " + project.name}
                                aria-current={index === active ? "true" : undefined}
                            />
                        ))}
                    </div>
                    <span className="carousel-count" aria-live="polite">
                        {String(active + 1).padStart(2, "0")} <span>/</span> {String(count).padStart(2, "0")}
                    </span>
                    <button type="button" className="carousel-arrow" onClick={() => move(1)} aria-label="Next project">
                        <HiArrowRight aria-hidden="true" />
                    </button>
                    <span className="carousel-hint">Drag, swipe, or use ← →</span>
                </div>

                <div className="projects-all-link">
                    <Link to="/projects">View all projects <HiArrowRight aria-hidden="true" /></Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectsCarousel;

