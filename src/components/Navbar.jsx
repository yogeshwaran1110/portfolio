import './Navbar.css';
import { useState } from 'react';

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">
                    <a href="#home">yb</a>
                </div>

                <ul className={`menu ${open ? 'active' : ''}`}>
                    <i
                        className="fa-solid fa-xmark close-icon"
                        onClick={() => setOpen(false)}
                    ></i>

                    <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
                    <li><a href="#education" onClick={() => setOpen(false)}>Education</a></li>
                    <li><a href="#skills" onClick={() => setOpen(false)}>Skill</a></li>
                    <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
                    <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
                </ul>

                <div className="menu-bar" onClick={() => setOpen(true)}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>

            <div className="white"></div>
        </nav>
    );
}
