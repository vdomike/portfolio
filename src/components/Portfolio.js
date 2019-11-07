import React from 'react';

import { PROJECTS } from '../constants/portfolioConstants';
import inner3 from '../assets/img/inner3.jpg';

const Portfolio = () => {
  return (
    <section className="section">
      <h2>Работы</h2>
      <div className="portfolio-wrapper">
        {PROJECTS.map((project, i) => (
          <a href="/" key={i} className="project">
            <div className="project-inner">
              <div
                className="project-front"
                style={{ backgroundImage: `url(${inner3})` }}
              ></div>
              <div className="project-back">
                <h5 className="project-title">Title</h5>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
