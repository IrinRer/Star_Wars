import { useAppSelector } from 'hooks/redux/useAppSelector';
import React from 'react';
import { getCharacters } from 'store/data/selectors';
import Tag from '../Tag';
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
          <div className={styles.tag_wrapper}>
            {item.gender !== 'n/a' ? <Tag text={item.gender} /> : null}
            {item.birth_year !== 'unknown' ? (
              <Tag text={item.birth_year} />
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
