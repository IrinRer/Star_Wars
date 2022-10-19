import React from 'react';
import { ReactComponent as Logo } from 'assets/img/Logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { ROUTES } from 'constants/route';
import styles from './index.module.scss';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.home.path);
  };

  return (
    <nav className={styles.wrapper}>
      <Logo onClick={handleClick} />
      <div className={styles.wrapper_link}>
        <NavLink
          to={ROUTES.home.path}
          end
          className={({ isActive }) =>
            isActive ? styles.link_active : styles.link
          }
        >
          {ROUTES.home.name}
        </NavLink>
        <NavLink
          to={ROUTES.characters.path}
          className={({ isActive }) =>
            isActive ? styles.link_active : styles.link
          }
        >
          {ROUTES.characters.name}
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
