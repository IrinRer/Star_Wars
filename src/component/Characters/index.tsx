import React from 'react';
import Search from './Search';
import styles from './index.module.scss';
import Card from './Card';

const CharactersComponent = () => {
  return (
    <div className={styles.wrapper} data-testid="wrapper">
      <Search />
      <Card />
    </div>
  );
};

export default CharactersComponent;
