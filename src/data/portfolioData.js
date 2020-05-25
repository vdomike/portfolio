import {
  mdiLanguageHtml5,
  mdiLanguageCss3,
  mdiLanguageJavascript,
  mdiVuejs,
  mdiReact,
} from '@mdi/js';
import theZhenshinyImg1 from 'src/assets/img/projects/the-zhenshiny/1.jpg';
import theZhenshinyImg2 from 'src/assets/img/projects/the-zhenshiny/2.jpg';
import theZhenshinyImg3 from 'src/assets/img/projects/the-zhenshiny/3.jpg';
import theZhenshinyImg4 from 'src/assets/img/projects/the-zhenshiny/4.jpg';
import todoImg1 from 'src/assets/img/projects/todo-app/1.jpg';
import todoImg2 from 'src/assets/img/projects/todo-app/2.jpg';
import todoImg3 from 'src/assets/img/projects/todo-app/3.jpg';
import todoImg4 from 'src/assets/img/projects/todo-app/4.jpg';
import placesImg1 from 'src/assets/img/projects/places/1.jpg';
import placesImg2 from 'src/assets/img/projects/places/2.jpg';
import prevBlogImg1 from 'src/assets/img/projects/prev-blog/1.jpg';
import prevBlogImg2 from 'src/assets/img/projects/prev-blog/2.jpg';

export const SKILLS = [
  {
    icon: mdiLanguageHtml5,
    title: 'HTML',
  },
  {
    icon: mdiLanguageCss3,
    title: 'CSS',
  },
  {
    icon: mdiLanguageJavascript,
    title: 'JavaScript',
  },
  {
    icon: mdiVuejs,
    title: 'Vue.js',
  },
  {
    icon: mdiReact,
    title: 'React.js',
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Lovely Todo App',
    url: 'https://lovely-todo-app.web.app/',
    images: [todoImg1, todoImg2, todoImg3, todoImg4],
    description: {
      __html:
        '<p>Проект задумывался как банальное todo-приложение для того, чтобы попробовать React.js. В процессе я решила оформить его в стиле милых девчоночьих дневников.</p><p>Был продуман соответствующий дизайн, эффекты, и привлечен фреймворк Tailwind CSS.</p><p>Потом, по подобию тех самых дневников я реализовала возможность добавлять цитаты. А после внедрения авторизации, я добавила возможность оценивать цитаты, и самую популярную по оценкам цитату выводить на главной странице. В качестве основной рабочей страницы был сделан дашборд, где хранятся списки дел, списки книг и добавленные цитаты. Бэкенд проекта был реализован на платформе Firebase.</p>',
    },
    tags: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  },
  {
    id: 2,
    title: 'Search Places',
    url: 'https://vdomike.github.io/vue-search-places/',
    subtitle: 'Поиск интересных мест',
    images: [placesImg1, placesImg2],
    description: {
      __html:
        '<p>Было желание поработать с картами. В результате родился этот проект для поиска адреса на карте с помощью автокомплита и последующего поиска достопримечательностей, кафе и магазинов в заданном радиусе.</p><p>Выполнен проект с помощью Vue.js, HERE Maps API и фреймворка Vuetify.</p>',
    },
    tags: ['Vue.js', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 3,
    title: 'The Женщины',
    subtitle: 'Онлайн-журнал',
    images: [
      theZhenshinyImg1,
      theZhenshinyImg2,
      theZhenshinyImg3,
      theZhenshinyImg4,
    ],
    description: {
      __html:
        '<p>Проект начинался как авторский онлайн-журнал. Для этого по заданию клиента на основе CMS Wordpress я создала трехколоночную тему с рубрикатором в сайдбаре. Была продумана страница вывода статьи и страницы дополнительных материалов. Была выполнена интеграция с соцсетями и сервисом email-рассылок.</p><p>По мере роста проекта авторский журнал превратился в журнал сообщества блогеров. В связи с этим я создала совершенно новую тему для Wordpress, с разделением по авторам, рубрикам и типам постов. На главной странице был сделан оригинальный вывод контента, где краткое описание постов чередовалось с выводом цитат авторов, рекламными материалами и формой подписки. Все это циклически выводилось с помощью бесконечной прокрутки. На сайте были размещены программно выполненные мною викторины для привлечения читателей.</p>',
    },
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 4,
    title: 'Мое предыдущее портфолио',
    images: [prevBlogImg1, prevBlogImg2],
    description: {
      __html:
        'Предыдущая версия моего портфолио. Была создана тема на Wordpress.',
    },
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
];
