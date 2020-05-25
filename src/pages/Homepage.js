import React, { Component, Fragment } from 'react';

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
      <Fragment>
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
        <div className="page homepage">
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
                  Имею за плечами более двух лет опыта работы в качестве
                  фронтенд-разработчика. Последние полтора из них - постоянное
                  удаленное сотрудничество с командой на проектах по разработке
                  веб-приложений.
                </p>
                <p>
                  Обладаю уверенными знания стека: HTML, CSS, JavaScript. Имею
                  опыт работы с фронтенд-фреймворками Vue.js и React.js, а также
                  со вспомогательными инструментами: SASS, Webpack, Git.
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
      </Fragment>
    );
  }
}

export default Homepage;
