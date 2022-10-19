import { NOT_FOUND, tag } from 'constants/common';
import React from 'react';
import styles from './index.module.scss';

const Tag = ({ text }) => {
  if (text === NOT_FOUND.NA || text === NOT_FOUND.UNKNOWN) {
    return null;
  }
  return (
    <div data-color={tag[text]} className={styles.tag}>
      {text}
    </div>
  );
};

export default Tag;
