import React from 'react';
import { ROUTES } from 'constants/route';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as NotFound } from 'assets/img/404.svg';
import styles from './index.module.scss';

interface IProps {
  text: string;
}

const Error: React.FC<IProps> = ({ text }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.home.path);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_text}>
        <NotFound />
        <p>{text}</p>
      </div>
      <button type="button" onClick={handleClick}>
        Return
      </button>
    </div>
  );
};

export default Error;
