import React, { Component } from 'react';

import Avatar from '../components/Avatar';
import Navbar from '../components/Navbar';
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
              <p>
                Фронтенд разработчик с более, чем двухлетним опытом работы
                (преимущественно на Vue.js).
              </p>
              <p>Уверенные знания стека: HTML, CSS, JavaScript.</p>
              <p>
                Опыт работы со вспомогательными инструментами: SASS, Webpack,
                Git.
              </p>
              <p>Всегда уделяю особое внимание проработке UI/UX.</p>
              <p>
                Умею эффективно работать в удаленном режиме и сотрудничать с
                распределенной командой.
              </p>
              <p>
                Работа вдохновляет меня, я всегда прикладываю максимум усилий,
                чтобы создать нечто одновременно и полезное, и прекрасное.
              </p>
            </section>
            <Portfolio />
          </main>
        </div>
      </div>
    );
  }
}

export default Homepage;
