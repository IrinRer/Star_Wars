import Loader from 'component/Loader';
import Modal from 'component/Modal';
import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import React, { useState } from 'react';
import { getCharacters, getLoading } from 'store/data/selectors';
import { setSelectedCharacter } from 'store/data/slice';
import Circle from '../Circle';
import Tag from '../Tag';
import styles from './index.module.scss';

const Card = () => {
  const characters = useAppSelector(getCharacters);
  const loading = useAppSelector(getLoading);
  const dispatch = useAppDispatch();
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleClick = (character) => {
    setOpen((state) => !state);
    dispatch(setSelectedCharacter(character));
  };

  return (
    <div className={styles.wrapper}>
      {!loading ? (
        characters.map((item) => (
          <div
            className={styles.wrapper_card}
            onClick={() => handleClick(item)}
            key={item.name}
          >
            <p className={styles.title}>{item.name}</p>
            <Circle height={item.height} mass={item.mass} block={false} />
            <div className={styles.tag_wrapper}>
              <Tag text={item.gender} />
              <Tag text={item.birth_year} />
            </div>
          </div>
        ))
      ) : (
        <Loader dark />
      )}
      <Modal isOpen={isOpen} setOpen={setOpen} />
    </div>
  );
};

export default Card;
