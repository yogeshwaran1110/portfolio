import { useScrollReveal} from "./units/useScrollReveal";
import './Education.css';

export function Education() {
  useScrollReveal();
  return (
    <section id='education' className="education">
      <h1 className="section-title">Education</h1>

      <div className="timeline">
        <div className="timeline-item">
          <span className="dot"></span>
          <div className="reveal content">
            <span className="year">2019 – 2022</span>
            <h3>Bachelor of Arts – Corporate Economics</h3>
            <p>Mazharul Uloom College, Thiruvalluvar University.</p>
          </div>
        </div>

        <div className="timeline-item">
          <span className="dot"></span>
          <div className="reveal content">
            <span className="year">2018 – 2019</span>
            <h3>Higher Secondary (12th)</h3>
            <p>Hindu Higher Secondary School, Ambur.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
