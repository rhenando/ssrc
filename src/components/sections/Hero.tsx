import Button from "../../ui/Button";
import "./Hero.css";

const Hero = () => {
  return (
    <section className='hero'>
      <div className='overlay'>
        <div className='container hero-content'>
          <h1>
            Strategic Solutions <br />
            for Research and Consulting
          </h1>
          <p>
            Delivering data-driven insights and executive advisory to help
            organizations make confident, high-impact decisions.
          </p>
          <Button>Request Consultation</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
