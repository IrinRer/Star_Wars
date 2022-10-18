import React from 'react';
import { ReactComponent as NotFound } from 'assets/img/404.svg';
import styles from './index.module.scss';

interface IProps {
  text: string;
}

const Error: React.FC<IProps> = ({ text }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_text}>
        <NotFound />
        <p>{text}</p>
      </div>
      <button type="button">Return</button>
    </div>
  );
};

export default Error;
