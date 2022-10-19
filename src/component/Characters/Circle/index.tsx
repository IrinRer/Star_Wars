import React from 'react';
import styles from './index.module.scss';

interface IProps {
  height: string;
  mass: string;
  block: boolean
}

const Circle: React.FC<IProps> = ({ height, mass, block }) => {
  return (
    <div className={styles.wrapper_card_circle}>
      <div className={styles.card_circle_container} data-block={block}>
        <div className={styles.circle}>{height}</div>
        <span>height</span>
      </div>
      <div className={styles.card_circle_container} data-block={block}>
        <div className={styles.circle}>{mass}</div>
        <span>mass</span>
      </div>
    </div>
  );
};

export default Circle;
