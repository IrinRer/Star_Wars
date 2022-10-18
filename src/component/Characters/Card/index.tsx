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
          <p className={styles.title}>{item.name}</p>
          <div className={styles.wrapper_card_circle}>
            <div className={styles.card_circle_container}>
              <div className={styles.circle}>{item.height}</div>
              <span>height</span>
            </div>
            <div className={styles.card_circle_container}>
              <div className={styles.circle}>{item.mass}</div>
              <span>mass</span>
            </div>
          </div>
          <div>{item.gender.toLowerCase()}</div>
          <div>{item.birth_year}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
