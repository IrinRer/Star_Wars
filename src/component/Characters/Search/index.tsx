import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import useDebounce from 'hooks/useDebounce';
import React, { useEffect } from 'react';
import { getCount, getPage, getSearchCharacters } from 'store/data/selectors';
import { setPageStore, setSearchCharacter } from 'store/data/slice';
import { dataFetchAction, searchDataAction } from 'store/data/thunk';
import styles from './index.module.scss';

const Search = () => {
  const search = useAppSelector(getSearchCharacters);
  const count = useAppSelector(getCount);
  const dispatch = useAppDispatch();
  const page = useAppSelector(getPage);
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearch) {
      dispatch(searchDataAction(debouncedSearch));
    } else {
      dispatch(dataFetchAction(1));
      dispatch(setPageStore(1));
    }
  }, [dispatch, debouncedSearch, page]);

  const handleChange = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    dispatch(setSearchCharacter(target.value));
  };

  return (
    <div>
      <p className={styles.title}>
        <b>{count} Peoples</b> for you to choose your <b>favorite</b>
      </p>
      <input
        value={search}
        type="text"
        placeholder="find..."
        className={styles.input}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
