import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Icon from '@mdi/react';
import { mdiLink } from '@mdi/js';
import theZhenshinyImg2 from 'src/assets/img/projects/the-zhenshiny/2.jpg';
import theZhenshinyImg1 from 'src/assets/img/projects/the-zhenshiny/1.jpg';
import theZhenshinyImg3 from 'src/assets/img/projects/the-zhenshiny/3.jpg';

class Projectpage extends Component {
  render() {
    return (
      <article className="project-page">
        <header>
          <h1 className="project-title">The zhenshiny</h1>
          <div className="project-link">
            <a href="/">
              <Icon path={mdiLink} title="link to project site" size={1} />
            </a>
          </div>
        </header>
        <AwesomeSlider>
          <div data-src={theZhenshinyImg1} />
          <div data-src={theZhenshinyImg2} />
          <div data-src={theZhenshinyImg3} />
        </AwesomeSlider>
        <div className="project-description">
          <div className="project-about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            assumenda aperiam corporis quam suscipit culpa, magni fugiat
            explicabo. Nemo totam officiis voluptatem ipsum sed ratione non
            repudiandae, assumenda culpa autem?
          </div>
        </div>
      </article>
    );
  }
}

export default Projectpage;
