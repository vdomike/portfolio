import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';
import { CSSTransition } from 'react-transition-group';

import { MENU_ITEMS } from '../data/menuData';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav>
      <div className="menu-toggle">
        <button onClick={() => setShowMenu(!showMenu)}>
          <Icon path={mdiMenu} title="Menu Toggle" size={1.5} color="#d1d1d1" />
        </button>
      </div>
      <CSSTransition
        in={showMenu}
        timeout={500}
        unmountOnExit
        classNames={'menu-open'}
      >
        <ul className="menu">
          {MENU_ITEMS.map((item) => (
            <li key={item.title}>
              <a
                href={item.path}
                target="_blank"
                className="menu-link"
                rel="noreferrer noopener"
              >
                <Icon path={item.icon} title={item.title} size={1.5} />
              </a>
            </li>
          ))}
        </ul>
      </CSSTransition>
    </nav>
  );
};

export default Navbar;
