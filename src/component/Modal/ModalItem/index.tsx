import Circle from 'component/Characters/Circle';
import Tag from 'component/Characters/Tag';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import React from 'react';
import { getSelectorCharacters } from 'store/data/selectors';
import ImgComponent from './ImgComponent';
import styles from './index.module.scss';

const ModalItem = () => {
  const character = useAppSelector(getSelectorCharacters);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_img}>
        <ImgComponent gender={character.gender} />
        <div className={styles.wrapper_tag}>
          <Tag text={character.gender} />
          <Tag text={character.birth_year} />
        </div>
      </div>
      <div className={styles.wrapper_text}>
        <h2>{character.name}</h2>
        <div className={styles.wrapper_text_sub}>
          <p>hair color: {character.hair_color}</p>
          <p>skin color: {character.skin_color}</p>
          <p>eye color: {character.eye_color}</p>
        </div>
        <Circle height={character.height} mass={character.mass} block />
      </div>
    </div>
  );
};

export default ModalItem;
