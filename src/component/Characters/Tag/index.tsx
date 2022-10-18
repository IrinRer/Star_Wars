import { tag } from 'constants/common';
import React from 'react';
import styles from './index.module.scss';

const Tag = ({ text}) => {
  return <div data-color={tag[text]} className={styles.tag}>{text}</div>;
};

export default Tag;
