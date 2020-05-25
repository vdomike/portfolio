import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import SkillFilter from '../components/SkillFilter';
import { PROJECTS } from '../data/portfolioData';

class Portfolio extends Component {
  state = {
    filteredProjects: PROJECTS,
    filterKey: 1,
  };
  filterProjects = (tag) => {
    const filteredProjects = PROJECTS.filter((project) =>
      project.tags.includes(tag)
    );
    this.setState((prevState) => {
      return {
        ...this.state,
        filteredProjects,
        filterKey: prevState.filterKey + 1,
      };
    });
  };
  resetFilter = () => {
    this.setState({ ...this.state, filteredProjects: PROJECTS });
  };
  render() {
    const { filteredProjects, filterKey } = this.state;
    return (
      <section className="section">
        <h2>Работы</h2>
        <SkillFilter
          onFilter={(tag) => this.filterProjects(tag)}
          onResetFilter={this.resetFilter}
        />
        <SwitchTransition>
          <CSSTransition
            classNames="fade-page"
            key={filterKey}
            addEndListener={(node, done) =>
              node.addEventListener('transitionend', done, false)
            }
          >
            <div className="portfolio-wrapper">
              {filteredProjects.map((project, i) => (
                <Link to={`/project/${project.id}`} key={i} className="project">
                  <div className="project-inner">
                    <div
                      className="project-front"
                      style={{ backgroundImage: `url(${project.images[0]})` }}
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
          </CSSTransition>
        </SwitchTransition>
      </section>
    );
  }
}

export default Portfolio;
