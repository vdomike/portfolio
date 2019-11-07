import React, { Component } from 'react';

import Avatar from '../components/Avatar';
import Navbar from '../components/Navbar';
import SkillListing from '../components/SkillListing';
import Portfolio from '../components/Portfolio';
import sign1 from '../assets/img/sign1.svg';
import sign2 from '../assets/img/sign2.svg';
import signBg1 from '../assets/img/sign-bg1.png';
import signBg2 from '../assets/img/sign-bg2.png';

class Homepage extends Component {
  render() {
    return (
      <div className="homepage container">
        <div
          className="container-sign sign-1"
          style={{ backgroundImage: `url(${signBg1})` }}
        >
          <img src={sign1} alt="" />
        </div>
        <div
          className="container-sign sign-2"
          style={{ backgroundImage: `url(${signBg2})` }}
        >
          <img src={sign2} alt="" />
        </div>
        <div>
          <header>
            <div className="container-avatar">
              <Avatar />
            </div>
            <Navbar />
            <h1>Ирина Пахомова</h1>
            <h2>Фронтенд разработчик</h2>
          </header>
          <main>
            <section className="about-section">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates placeat tenetur illum ullam alias voluptatum enim
              assumenda velit voluptate temporibus quidem, veniam nulla
              officiis, aut nam, deleniti quis aspernatur doloribus.
            </section>
            <SkillListing />
            <Portfolio />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              asperiores a pariatur ipsum recusandae assumenda hic iste fugiat,
              dignissimos distinctio odit nihil reiciendis similique
              perspiciatis repellendus nemo enim sit aut. Sunt consequatur in
              quibusdam itaque corporis rerum odit veritatis mollitia aliquam
              adipisci aut repellat maiores asperiores praesentium nulla error
              culpa, repudiandae sit exercitationem aperiam explicabo neque?
              Nostrum doloribus recusandae unde sapiente nihil quasi natus,
              fugiat autem rem veniam praesentium sunt nam quidem ipsam.
              Necessitatibus quia dolor distinctio! Quas quibusdam harum omnis,
              temporibus modi commodi repellendus, dicta nobis perspiciatis at
              enim eligendi. Labore ex quasi molestias voluptatibus ad quis sunt
              cumque.
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Homepage;
