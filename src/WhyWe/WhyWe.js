import React from 'react';
import './WhyWe.css';
import { FaGem, FaUserFriends, FaHandshake, FaRulerCombined, FaSmile, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaGem className="whywe-icon" />,
    title: 'Since 2016',
    desc: 'Over 6+ years online travel service in tailor-made, 1000+ successful happy travel experiences.',
  },
  {
    icon: <FaUserFriends className="whywe-icon" />,
    title: 'Expert Consultant',
    desc: '24/7 online, 1 on 1 private service, over 10 years experience! 100% Value Guaranteed.',
  },
  {
    icon: <FaHandshake className="whywe-icon" />,
    title: 'Ground Support',
    desc: 'Experienced, warm-hearted guides and staff, 24 hrs standing by.',
  },
  {
    icon: <FaRulerCombined className="whywe-icon" />,
    title: '100% Tailor-Made Trip',
    desc: 'Design only for you and in your style! Flexible travel date.',
  },
  {
    icon: <FaSmile className="whywe-icon" />,
    title: '100% Value Guaranteed',
    desc: 'Best value for money. Exceed your expectation and 100% satisfaction!',
  },
  {
    icon: <FaShieldAlt className="whywe-icon" />,
    title: 'No Hidden Cost',
    desc: 'We guarantee there will be no hidden cost during your trip.',
  },
];

function WhyWe() {
  return (
    <div className="whywe-container">
      <h3 className="whywe-heading">
        Why <span className="highlight">Angel Destination</span>
      </h3>
      <div className="whywe-divider"></div>
      <div className="whywe-grid">
        {features.map((item, index) => (
          <div key={index} className="whywe-card">
            <div>{item.icon}</div>
            <div>
              <h3 className="whywe-title">{item.title}</h3>
              <p className="whywe-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyWe;
