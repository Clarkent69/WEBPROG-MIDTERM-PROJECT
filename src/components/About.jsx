import React from 'react';
import { ChevronDown } from 'lucide-react';

const About = () => {
    const hardSkillsLines = [
        ["Java", "Python", "CSS", "JavaScript", "HTML 5", "C++", "Arduino", "React"],
        ["MS PowerApps", "VS Code", "Docker", "Figma"],
        ["RDBM", "MySQL", "Apache", "Firebase"],
        ["Cisco Packet Tracer", "GitHub", "Linux", "Windows"],
        ["OOP", "Dynamic Programming"]
    ];

    const softSkills = [
        { name: "Problem Solving", color: "badge-orange" },
        { name: "Collaboration & Teamwork", color: "badge-orange" },
        { name: "Adaptability", color: "badge-orange" },
        { name: "Continuous Learner", color: "badge-purple" },
        { name: "Time Management", color: "badge-orange" },
        { name: "Communicator", color: "badge-purple" },
        { name: "Analytical Thinking", color: "badge-orange" }
    ];

    return (
        <section id="about" className="section about-section">
            <h2 className="section-title font-dot justify-center text-4xl mb-12">SKILLS</h2>

            <div className="skills-container">
                <div className="skill-column">
                    <h3 className="skill-header">
                        HARD SKILLS:
                        <ChevronDown size={32} strokeWidth={3} className="text-[#d71921] mt-2 block mx-auto" />
                    </h3>
                    <ul className="skill-list-text">
                        {hardSkillsLines.map((line, lineIdx) => (
                            <li key={lineIdx}>
                                {line.map((skill, skillIdx) => (
                                    <React.Fragment key={skillIdx}>
                                        <span className="shimmer-text hover:font-bold cursor-default">
                                            {skill}
                                        </span>
                                        {skillIdx < line.length - 1 && <span className="text-[#555]">, </span>}
                                    </React.Fragment>
                                ))}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="skill-column">
                    <h3 className="skill-header">
                        SOFT SKILLS:
                    </h3>
                    <div className="soft-skills-grid mt-8">
                        {softSkills.map((skill, idx) => (
                            <span
                                key={idx}
                                className={`skill-badge ${skill.color} clickable-badge`}
                                onClick={() => console.log(`Clicked ${skill.name}`)}
                            >
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
