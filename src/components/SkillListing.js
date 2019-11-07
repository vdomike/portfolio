import React from 'react';
import Icon from '@mdi/react';

import { SKILLS } from '../constants/portfolioConstants';

const SkillListing = () => {
  return (
    <section className="section">
      <h2>Знания и навыки</h2>
      <div className="skills-wrapper">
        {SKILLS.map((skill, i) => (
          <div className="skill" key={i}>
            <div className="skill-container">
              <Icon
                path={skill.icon}
                title={skill.title}
                size={3}
                color="#696969"
              />
              <span className="skill-title">{skill.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default SkillListing;
