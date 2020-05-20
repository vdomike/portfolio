import React from 'react';
import Icon from '@mdi/react';

import { SKILLS } from '../data/portfolioData';

const SkillFilter = () => {
  return (
    <section className="filter">
      <div className="skills-wrapper">
        {SKILLS.map((skill, i) => (
          <div className="skill" key={i}>
            <Icon
              path={skill.icon}
              title={skill.title}
              size={2}
              className="filter-icon"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default SkillFilter;
