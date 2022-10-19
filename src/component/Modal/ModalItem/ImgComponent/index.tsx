import React from 'react';
import { ReactComponent as Male } from 'assets/img/man.svg';
import { ReactComponent as Female } from 'assets/img/female.svg';
import { ReactComponent as Herm } from 'assets/img/herm.svg';

interface IProps {
  gender: string;
}

const ImgComponent: React.FC<IProps> = ({ gender }) => {
  if (gender === 'female') {
    return <Female />;
  } else if (gender === 'male') {
    return <Male />;
  } else {
    return <Herm />;
  }
};

export default ImgComponent;
