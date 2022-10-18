import { useAppSelector } from 'hooks/redux/useAppSelector';
import React from 'react';
import { getCharacters } from 'store/data/selectors';
import styles from './index.module.scss';

const Card = () => {
  const characters = useAppSelector(getCharacters);

  return (
    <div className={styles.wrapper}>
      {characters.map((item) => (
        <div className={styles.wrapper_card}>
          <p>{item.name}</p>
          <div>{item.height}</div>
          <div>{item.mass}</div>
          <div>{item.gender.toLowerCase()}</div>
          <div>{item.birth_year}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
