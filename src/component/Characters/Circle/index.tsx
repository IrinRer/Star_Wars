import { NOT_FOUND } from 'constants/common';
import React from 'react';
import styles from './index.module.scss';

interface IProps {
  height: string;
  mass: string;
  block: boolean;
}

const Circle: React.FC<IProps> = ({ height, mass, block }) => {
  return (
    <div className={styles.wrapper_card_circle}>
      {height !== NOT_FOUND.UNKNOWN ? (
        <div className={styles.card_circle_container} data-block={block}>
          <div className={styles.circle}>{height}</div>
          <span>height</span>
        </div>
      ) : null}
      {mass !== NOT_FOUND.UNKNOWN ? (
        <div className={styles.card_circle_container} data-block={block}>
          <div className={styles.circle}>{mass}</div>
          <span>mass</span>
        </div>
      ) : null}
    </div>
  );
};

export default Circle;
