import React from 'react';
import { ReactComponent as Logo } from 'assets/img/Logo.svg';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'constants/route';
import styles from './index.module.scss';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <div className={styles.wrapper_link}>  
      <NavLink to={ROUTES.home.path} className={styles.link}>
        {ROUTES.home.name}
      </NavLink>
      <NavLink to={ROUTES.characters.path} className={styles.link}>
        {ROUTES.characters.name}
      </NavLink>
      </div>
    </div>
  );
};

export default Header;
