import './Skill.css';
import { useScrollReveal } from './units/useScrollReveal';
import { useState, useEffect } from 'react';

import html from '../assets/image/skills/html.png';
import css from '../assets/image/skills/css.png';
import javascript from '../assets/image/skills/javascript.png';
import react from '../assets/image/skills/react.png';
import python from '../assets/image/skills/python.png';
import django from '../assets/image/skills/django.png';
import sql from '../assets/image/skills/sql.png';
import mongodb from '../assets/image/skills/mongodb.png';

export function Skill() {

    useScrollReveal();

    const skills = [
    {
        image: html,
        name: 'HTML',
        description: 'Experienced in building clean, structured, and SEO-friendly web pages using HTML5.'
    },
    {
        image: css,
        name: 'CSS',
        description: 'Skilled in creating responsive layouts, animations, and modern UI designs with CSS3.'
    },
    {
        image: javascript,
        name: 'JavaScript',
        description: 'Strong understanding of JavaScript for building interactive and dynamic web features.'
    },
    {
        image: react,
        name: 'React.js',
        description: 'Skilled in developing modern, component-based web applications with React.js.'
    },
    {
        image: python,
        name: 'Python',
        description: 'Knowledge of Python programming, problem-solving, and backend development fundamentals.'
    },
    {
        image: django,
        name: 'Django',
        description: 'Knowledge of Django for developing backend applications, handling requests, and connecting databases.'
    },
    {
        image: sql,
        name: 'SQL / MySQL',
        description: 'Experience working with relational databases, SQL queries, joins, and CRUD operations.'
    },
    {
        image: mongodb,
        name: 'MongoDB',
        description: 'Knowledge of NoSQL databases, document-based data storage, and CRUD operations.'
    }
];

    // clone first slide at end
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

    // handle seamless reset
    useEffect(() => {
        if (currentIndex === skills.length) {
            setTimeout(() => {
                setEnableTransition(false);
                setCurrentIndex(0);
            }, 800); // match CSS transition time
        } else {
            setEnableTransition(true);
        }
    }, [currentIndex, skills.length]);

    return (
        <section id='skills' className="skill">
            <h1 className="section-title">Skills</h1>

            <div className="reveal container">
                <div
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
