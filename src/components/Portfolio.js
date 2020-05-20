import React from 'react';
import { Link } from 'react-router-dom';

import SkillFilter from '../components/SkillFilter';
import { PROJECTS } from '../data/portfolioData';
// import inner3 from '../assets/img/inner3.jpg';

const Portfolio = () => {
  return (
    <section className="section">
      <h2>Работы</h2>
      <SkillFilter />
      <div className="portfolio-wrapper">
        {PROJECTS.map((project, i) => (
          <Link to={`/project/${project.id}`} key={i} className="project">
            <div className="project-inner">
              <div
                className="project-front"
                style={{ backgroundImage: `url(${project.imagePath})` }}
              ></div>
              <div className="project-back">
                <h5 className="project-title">
                  {project.title}
                  <br />
                  <small>{project.subtitle}</small>
                </h5>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
