import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

const projects = [
    {
        id: '01',
        title: 'Pixel Vault',
        type: 'Security',
        concept: 'A desktop or web application that allows users to hide encrypted text messages inside image files without altering the image’s visual quality.',
    },
    {
        id: '02',
        title: 'Petdex',
        type: 'App',
        concept: 'Personalized Pet Tracker primarily for Dogs and Cats in the theme of retro pokemon game. Features notes and journal tools.',
    },
    {
        id: '03',
        title: 'Net Sentinel',
        type: 'Network',
        concept: 'A dashboard that visualizes traffic on your local network, flagging potential "intrusions" or unknown devices.',

    },
    {
        id: '04',
        title: 'Hue Color Grading Analyzer',
        type: 'Imaging',
        concept: 'A computer vision tool that uses machine learning (K-Means Clustering) to mathematically deconstruct an image or video frame. Instead of viewing pixels individually, it groups them to calculate the dominant color palette and their exact percentage distribution (Ex: "60% Navy Blue, 30% Grey, 10% Neon Red").',
        Uses: ['Digital Marketing & E-Commerce', 'Brand Identity Protection', 'Forensics']
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="section">
            <h2 className="section-title font-dot">Upcoming Projects <span className="text-red">(04)</span></h2>
            <div className="projects-grid">
                {projects.map((p) => (
                    <div key={p.id} className="project-card" onClick={() => setSelectedProject(p)}>
                        <div className="card-header font-mono text-secondary">
                            <span>{p.id}</span>
                            <span>// {p.type}</span>
                        </div>
                        <h3 className="card-title font-dot">{p.title}</h3>
                        <div className="card-overlay"></div>
                    </div>
                ))}
            </div>

            {selectedProject && createPortal(
                <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button
                            className="modal-close-btn"
                            onClick={() => setSelectedProject(null)}
                        >
                            <X size={20} strokeWidth={3} />
                        </button>

                        <h3 className="font-dot text-4xl mb-8 text-white uppercase tracking-wider">{selectedProject.title}</h3>

                        <div className="space-y-8 font-mono text-sm leading-relaxed max-w-xl">
                            <div>
                                <h4 className="text-[#d71921] text-xl mb-4 uppercase font-bold tracking-widest font-dot">THE CONCEPT:</h4>
                                <p className="text-white text-lg">{selectedProject.concept}</p>
                            </div>

                            {selectedProject.useCases && (
                                <div>
                                    <h4 className="text-[#d71921] mb-2 uppercase tracking-wide">Use Cases</h4>
                                    <ul className="text-gray-300">
                                        {selectedProject.useCases.map((useCase, idx) => (
                                            <li key={idx} className="inline-block mx-2 after:content-['•'] after:ml-4 last:after:content-['']">{useCase}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
};
export default Projects;
