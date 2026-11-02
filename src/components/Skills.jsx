import React from "react";
import { motion } from "framer-motion";
import { HiSparkles, HiCode, HiDesktopComputer, HiDatabase, HiCog } from "react-icons/hi";
import skillsData from "../data/skills.json";

const categoryIcons = [HiSparkles, HiCode, HiDesktopComputer, HiDatabase, HiCog];

const Skills = () => (
    <section id="skills" className="section skills-section" aria-labelledby="skills-title">
        <div className="section-inner">
            <div className="section-heading">
                <span className="section-kicker">02 / Skills</span>
                <h2 id="skills-title">Tools for turning ideas into <span className="gradient-text">working products</span></h2>
                <p>My experience spans full-stack development, AI prompt engineering, and the tools that connect them.</p>
            </div>
            <div className="skills-grid">
                {skillsData.categories.map((category, index) => {
                    const Icon = categoryIcons[index % categoryIcons.length];
                    return (
                        <motion.article
                            key={category.name}
                            className="info-card skill-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.45, delay: index * 0.06 }}
                        >
                            <div className="skill-card-icon"><Icon aria-hidden="true" /></div>
                            <h3>{category.name}</h3>
                            <ul className="skill-tags">
                                {category.skills.map((skill) => <li key={skill}>{skill}</li>)}
                            </ul>
                        </motion.article>
                    );
                })}
            </div>
        </div>
    </section>
);

export default Skills;
