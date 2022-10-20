import Loader from 'component/Loader';
import Modal from 'component/Modal';
import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import usePagination from 'hooks/usePagination';
import { DataItem } from 'store/data/types';
import React, { useState, useRef } from 'react';
import {
  getCharacters,
  getLoading,
  getPage,
  getSearchLoading,
} from 'store/data/selectors';
import classnames from 'classnames';
import { setPageStore, setSelectedCharacter } from 'store/data/slice';
import Circle from '../Circle';
import Tag from '../Tag';
import styles from './index.module.scss';

const Card = () => {
  const characters = useAppSelector(getCharacters);
  const loading = useAppSelector(getLoading);
  const pageStore = useAppSelector(getPage);
  const loadingSearch = useAppSelector(getSearchLoading);
  const { firstContentIndex, lastContentIndex, page, setPage, totalPages } =
    usePagination({
      contentPerPage: 5,
      count: characters.length,
    });
  const dispatch = useAppDispatch();
  const [isOpen, setOpen] = useState<boolean>(false);
  const elementRef = useRef<any>();

  const handleClick = (character: DataItem) => {
    setOpen((state) => !state);
    dispatch(setSelectedCharacter(character));
  };

  const handlePagination = () => {
    dispatch(setPageStore(pageStore + 1));
  };

  return (
    <div className={styles.wrapper_main}>
      <div className={styles.wrapper} data-testid="people-list">
        {!loadingSearch && !loading ? (
          characters
            .slice(firstContentIndex, lastContentIndex)
            .map((item: DataItem) => (
              <div
                className={styles.wrapper_card}
                onClick={() => handleClick(item)}
                key={item.name}
              >
                <p className={styles.title}>{item.name}</p>
                <Circle height={item.height} mass={item.mass} block={false} />
                <div className={styles.tag_wrapper}>
                  <Tag text={item.gender} />
                  <Tag text={item.birth_year} />
                </div>
              </div>
            ))
        ) : (
          <Loader />
        )}
        <Modal isOpen={isOpen} setOpen={setOpen} />
      </div>
      {elementRef.current === page ? (
        <button type="button" className={styles.btn} onClick={handlePagination}>
          Загрузить еще
        </button>
      ) : null}
      <div className={styles.pagination}>
        {[...Array(totalPages).keys()].map((el) => {
          elementRef.current = el + 1;
          return (
            <button
              onClick={() => setPage(el + 1)}
              key={el}
              className={classnames(styles.page, {
                [styles.page_active]: page === el + 1,
              })}
              type="button"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Card;
