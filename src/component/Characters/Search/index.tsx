import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import useDebounce from 'hooks/useDebounce';
import React, { useEffect } from 'react';
import { getSearchCharacters } from 'store/data/selectors';
import { setSearchCharacter } from 'store/data/slice';
import { dataFetchAction, searchDataAction } from 'store/data/thunk';
import styles from './index.module.scss';

const Search = () => {
  const search = useAppSelector(getSearchCharacters);
  const dispatch = useAppDispatch();
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearch) {
      dispatch(searchDataAction(debouncedSearch));
    } else {
      dispatch(dataFetchAction());
    }
  }, [dispatch, debouncedSearch]);

  const handleChange = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    dispatch(setSearchCharacter(target.value));
  };

  return (
    <div>
      <p className={styles.title}>
        <b>60 Peoples</b> for you to choose your <b>favorite</b>
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
