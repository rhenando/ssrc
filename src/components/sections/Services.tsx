import { BarChart3, Briefcase, ShieldCheck } from "lucide-react";
import "./Services.css";

const Services = () => {
  return (
    <section className='services'>
      <div className='container'>
        <div className='services-header'>
          <h2>Our Core Services</h2>
          <p>
            Strategic insight. Analytical precision. Executive-level advisory.
          </p>
        </div>

        <div className='service-grid'>
          <div className='service-card'>
            <div className='icon-wrapper'>
              <BarChart3 size={32} />
            </div>
            <h3>Research & Analytics</h3>
            <p>
              Comprehensive data modeling, market research, and intelligence
              reporting designed for informed strategic decisions.
            </p>
          </div>

          <div className='service-card'>
            <div className='icon-wrapper'>
              <Briefcase size={32} />
            </div>
            <h3>Strategic Advisory</h3>
            <p>
              Executive advisory services focused on transformation, growth
              strategy, and long-term sustainability.
            </p>
          </div>

          <div className='service-card'>
            <div className='icon-wrapper'>
              <ShieldCheck size={32} />
            </div>
            <h3>Policy & Risk Consulting</h3>
            <p>
              Governance frameworks, compliance strategy, and enterprise risk
              mitigation tailored for complex environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
