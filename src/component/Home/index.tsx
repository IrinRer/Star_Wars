import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Img } from 'assets/img/banner.svg';
import { ROUTES } from 'constants/route';
import styles from './index.module.scss';

const HomeComponet = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    return navigate(ROUTES.characters.path);
  };

  return (
    <div className={styles.wrapper_main}>
      <div className={styles.wrapper_sub}>
        <h1>
          <b>Find </b>all your favorite <b>character</b>
        </h1>
        <h2>
          You can find out all the information about your favorite characters
        </h2>
        <button type="button" onClick={handleClick}>
          See more...
        </button>
      </div>
      <Img />
    </div>
  );
};

export default HomeComponet;
