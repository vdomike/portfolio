import React from 'react';
import Icon from '@mdi/react';

import { SKILLS } from '../data/portfolioData';

const SkillFilter = ({ onFilter, onResetFilter }) => {
  return (
    <section className="filter">
      <div className="skills-wrapper">
        {SKILLS.map((skill, i) => (
          <div className="skill" key={i} onClick={() => onFilter(skill.title)}>
            <Icon
              path={skill.icon}
              title={skill.title}
              size={2}
              className="filter-icon"
            />
          </div>
        ))}
        <div className="skill no-icon" onClick={onResetFilter}>
          Все
        </div>
      </div>
    </section>
  );
};
export default SkillFilter;
