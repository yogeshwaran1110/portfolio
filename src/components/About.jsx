import { useScrollReveal} from "./units/useScrollReveal";
import './About.css';
import aboutImage from '../assets/image/about.JPG';

export function About() {

    const aboutcontent = "I'm a passionate Full-Stack Developer who enjoys turning ideas into modern, responsive, and interactive web applications. With a strong foundation in frontend technologies and backend development, I focus on creating seamless user experiences and reliable web solutions. I'm always eager to learn new technologies, solve problems, and build applications that make a difference.";

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