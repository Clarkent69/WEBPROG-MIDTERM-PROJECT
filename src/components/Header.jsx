import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
    return (
        <header className="header">
            <div className="logo font-dot">
                JAPHET MELQUIS<span className="text-red">.</span>
            </div>
            <nav className="nav desktop-only font-mono">
                <a href="#projects" className="nav-link">[PROJECTS]</a>
                <a href="#about" className="nav-link">[ABOUT]</a>
                <a href="#contact" className="nav-link">[CONTACT]</a>
            </nav>
            <button className="mobile-menu-btn mobile-only">
                <Menu color="red" />
            </button>
        </header>
    );
};

export default Header;
