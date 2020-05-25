import React from 'react';
import { useParams, Link } from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Icon from '@mdi/react';
import { mdiLink, mdiArrowLeft } from '@mdi/js';
import { PROJECTS } from '../data/portfolioData';

const Projectpage = () => {
  const { id } = useParams();
  const project = PROJECTS.find((project) => project.id === Number(id));
  const { title, url, images, description } = project;
  return (
    <article className="page project-page">
      <header>
        <Link to="/" className="back-link">
          <Icon path={mdiArrowLeft} title="back" size={1.2} />
        </Link>
        <h1 className="project-title">{title}</h1>
        <div className="project-link">
          {url && (
            <a href="/">
              <Icon path={mdiLink} title="link to project site" size={1} />
            </a>
          )}
        </div>
      </header>
      <AwesomeSlider>
        {images.map((image, i) => (
          <div data-src={image} key={i} />
        ))}
      </AwesomeSlider>
      <div className="project-description">
        <div
          className="project-about"
          dangerouslySetInnerHTML={description}
        ></div>
      </div>
    </article>
  );
};

export default Projectpage;
