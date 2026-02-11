import './Skill.css';
import { useScrollReveal } from './units/useScrollReveal';
import { useState, useEffect } from 'react';

import html from '../assets/image/skills/html.png';
import css from '../assets/image/skills/css.png';
import javascript from '../assets/image/skills/javascript.png';
import react from '../assets/image/skills/react.png';
import python from '../assets/image/skills/python.png';

export function Skill() {

    useScrollReveal();

    const skills = [
        { image: html, name: 'HTML', description: 'Experienced in building clean, structured, and SEO-friendly web pages using HTML5.' },
        { image: css, name: 'CSS', description: 'Skilled in creating responsive layouts, animations, and modern UI designs with CSS3.' },
        { image: javascript, name: 'JavaScript', description: 'Strong understanding of JavaScript for building interactive and dynamic web features.' },
        { image: react, name: 'React', description: 'Skilled in developing modern, component-based web applications with React JS.' },
        { image: python, name: 'Python', description: 'Basic Python knowledge for scripting and backend understanding.' }
    ];

    const extendedSkills = [...skills, skills[0]];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [enableTransition, setEnableTransition] = useState(true);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex(prev => prev + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const handleTransitionEnd = () => {
        if (currentIndex === skills.length) {
            setEnableTransition(false);
            setCurrentIndex(0);
        }
    };

    useEffect(() => {
        if (!enableTransition) {
            requestAnimationFrame(() => {
                setEnableTransition(true);
            });
        }
    }, [enableTransition]);

    return (
        <section id='skills' className="skill">
            <h1 className="section-title">Skills</h1>

            <div className="reveal container">
                <div
                    onTransitionEnd={handleTransitionEnd}
                    className={`skill-slider ${enableTransition ? 'transition' : ''}`}
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {extendedSkills.map((skill, index) => (
                        <div className="card" key={index}>
                            <img
                                className={`skill-image ${skill.name.toLowerCase()}`}
                                onMouseEnter={() => setIsPaused(true)}
                                onMouseLeave={() => setIsPaused(false)}
                                src={skill.image}
                                alt={skill.name}
                            />
                            <div className="skill-text">
                                <strong>{skill.name}</strong>
                                <p>{skill.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
