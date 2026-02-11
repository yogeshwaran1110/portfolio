import { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { About } from "./About";
import { Education } from "./Education";
import { Skill } from "./Skill";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { SocialMedia } from "./socialmedias/SocialMedia";
import { useScrollReveal} from "./units/useScrollReveal";
import profileImage from '../assets/image/profile.JPG';
import resume from '../resume/Resume.pdf';
import './Home.css';

export function Home() {
  const name = "Yogesh Waran";
  const role = ["Front-End Developer", "React Developer"];
  // const description = "I build modern, responsive web interfaces with a focus on clean design and perfect user experience.Specialized in React and modern JavaScript to create interactive user experiences.";

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useScrollReveal();


  useEffect(() => {
    const roleChangeInterval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % role.length);
    }, 3000); // Change role every 3 seconds
    return () => clearInterval(roleChangeInterval);
  }, [role.length]);


  return (
    <>
      <Navbar />

      <div id="home" className="home-container">
        <div className="reveal text-container">
          <div className="text-content">
            <h1>Welcome to My Portfolio</h1>
            <h1>HI, <span className="name">I'm {name}</span> </h1>
            <h2>{role[currentRoleIndex]}</h2>
            {/*<p className="description">{description}</p>*/}
          </div>

          <div className="resume">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
            >
              <button className="button" >Resume</button>
            </a>

            <SocialMedia />
          </div>



        </div>
        <div className="reveal home-image-container">
          <img className="profile-image" src={profileImage} alt="profile-image" />
        </div>
      </div>

      <About />

      <div className="education-skill">
        <Education />
        <Skill />
      </div>
      
      <Projects />
      <Contact />
      <Footer />

    </>
  );
}