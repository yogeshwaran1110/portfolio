import './Footer.css';


const github = 'https://github.com/yogeshwaran1110';
const instagram = 'https://www.instagram.com/dark_y_b_?igsh=dTVtYzhyajQ1NXh3';
const facebook = 'https://www.facebook.com/share/1DZ3SMw2gs/';
const linkedin = 'https://www.linkedin.com/in/yogeshwaran11';

export function Footer() {
    return (
        <section className='footer'>
            <div className='footer-container'>
                <nav className='footer-nav'>
                    <h2>Quick Link</h2>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#education">Education</a>
                    <a href="#skills">SKill</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>

                <div className='footer-socials'>
                    <h2>Follow Us</h2>
                    <a href={instagram} target="_blank" >Instagram</a>
                    <a href={linkedin} target="_blank" >LinkedIn</a>
                    <a href={facebook} target="_blank" >Facebook</a>
                    <a href={github} target="_blank" >GitHub</a>
                </div>
            </div>

            <div className='copy-right'>
                <p>
                    <i className="fa-solid fa-copyright"></i> {new Date().getFullYear()} Yogeshwaran
                </p>
            </div>
        </section>
    );
}