import { useScrollReveal} from "./units/useScrollReveal";
import './About.css';
import aboutImage from '../assets/image/about.JPG';

export function About() {

    const aboutcontent = "I’m a passionate Frontend and Web Developer focused on building modern, responsive websites. I work with HTML, CSS, JavaScript, and React to create clean and interactive user experiences. Always learning and improving, aiming to grow into a full-stack developer.";

    useScrollReveal();

    return (
        <div id='about' className="about-container">
            <center>
                <h1>About Me</h1>
            </center>

            <div className="reveal about-content">
                <div>
                    <img className="about-image" src={aboutImage} alt="about-image" />
                </div>
                <div className="about-text">
                    <p>
                        {aboutcontent}
                    </p>
                </div>

            </div>
        </div>
    );
}