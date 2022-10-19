import React from 'react';
import { ReactComponent as SpinerLight } from 'assets/img/spinner_light.svg';
import { ReactComponent as SpinerDark } from 'assets/img/spinner_dark.svg';

interface IProps {
  dark: boolean;
}

const Loader: React.FC<IProps> = ({ dark }) => {
  return <>{dark ? <SpinerDark /> : <SpinerLight />}</>;
};

export default Loader;
