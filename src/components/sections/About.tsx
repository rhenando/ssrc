import { CheckCircle2, Target, Award } from "lucide-react";
import "./About.css";

const About = () => {
  return (
    <section className='about'>
      <div className='container about-content'>
        <div className='about-left'>
          <h2>Why Choose SSRC</h2>
          <p>
            We combine rigorous research methodology with high-level consulting
            expertise to deliver solutions that are precise, practical, and
            strategically transformative.
          </p>
        </div>

        <div className='about-right'>
          <div className='about-item'>
            <div className='about-icon'>
              <Target size={26} />
            </div>
            <div>
              <h4>Strategic Precision</h4>
              <p>
                Insight-driven frameworks aligned with long-term objectives.
              </p>
            </div>
          </div>

          <div className='about-item'>
            <div className='about-icon'>
              <Award size={26} />
            </div>
            <div>
              <h4>Executive-Level Expertise</h4>
              <p>
                Advisory solutions built for leadership and decision-makers.
              </p>
            </div>
          </div>

          <div className='about-item'>
            <div className='about-icon'>
              <CheckCircle2 size={26} />
            </div>
            <div>
              <h4>Proven Impact</h4>
              <p>Research-backed strategies delivering measurable outcomes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
