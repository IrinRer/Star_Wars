import React from 'react';
import { createPortal } from 'react-dom';
import { ReactComponent as Close } from 'assets/img/closeIcon.svg';
import styles from './index.module.scss';
import ModalItem from './ModalItem';

interface IProps {
  isOpen: boolean;
  setOpen: (arg: boolean) => void;
}

const Modal: React.FC<IProps> = ({ isOpen, setOpen }) => {
  if (!isOpen) return null;

  const handleClick = () => {
    setOpen(false);
  };

  return createPortal(
    <div className={styles.modal}>
      <div className={styles.wrapper_sub}>
        <ModalItem />
        <Close onClick={handleClick} className={styles.close}/>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
