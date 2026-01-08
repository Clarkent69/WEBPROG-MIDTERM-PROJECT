import React from 'react';
import { Download } from 'lucide-react';
import profileImg from '../assets/profile.png';

const Hero = () => {
    return (
        <section className="section hero-section">
            <div className="hero-content">
                <div className="hero-text">
                    <div className="font-mono text-red mb-4 tracking-widest">
                        ||  2ND YEAR BSCSCF
                    </div>
                    <h1 className="hero-title font-dot uppercase mb-8">
                        JAPHET<br />
                        <span className="text-secondary">MELQUISEDEC GONZALES</span>
                    </h1>
                    <p className="hero-desc font-mono text-secondary">
                        Aspiring Cybersecurity and Forensics specialist. Engineering
                        secure, high-performance systems using Python, Java, and Linux.
                        Transforming complex logic into robust software solutions.
                    </p>
                </div>

                <div className="hero-image-container group">
                    <img src={profileImg} alt="Japhet Gonzales" className="profile-image" />
                    <a href="/CV- Japhet Melquisedec Gonzales.pdf" download="Cv- Japhet Melquisedec Gonzales.pdf" className="download-overlay">
                        <button className="download-btn">
                            <Download size={18} />
                            DOWNLOAD CV
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
