import React from 'react';
import { ReactComponent as Logo } from 'assets/img/Logo.svg';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'constants/route';

const Header = () => {
  return (
    <>
      <Logo />
      <NavLink to={ROUTES.home.path}>{ROUTES.home.name}</NavLink>
      <NavLink to={ROUTES.characters.path}>{ROUTES.characters.name}</NavLink>
    </>
  );
};

export default Header;
