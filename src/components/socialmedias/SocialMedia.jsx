import './SocialMedia.css';

const github = 'https://github.com/yogeshwaran1110';
const instagram = 'https://www.instagram.com/dark_y_b_?igsh=dTVtYzhyajQ1NXh3';
const facebook = 'https://www.facebook.com/share/1DZ3SMw2gs/';
const twitter = 'https://x.com/Yogeshwaran1110';
const linkedin = 'https://www.linkedin.com/in/yogeshwaran11';

export function SocialMedia() {
  return (
    <div className="social-media">
      <a href={github} target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-github"></i>
      </a>

      <a href={instagram} target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-instagram"></i>
      </a>

      <a href={facebook} target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-facebook"></i>
      </a>

      <a href={twitter} target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-x-twitter"></i>
      </a>

      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-linkedin"></i>
      </a>
    </div>
  );
}
