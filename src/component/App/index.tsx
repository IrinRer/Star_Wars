import CreateRoutes from 'container/Route';
import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import React, { useEffect } from 'react';
import { getPage } from 'store/data/selectors';
import { dataFetchAction } from 'store/data/thunk';

const App = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(getPage);

  useEffect(() => {
    dispatch(dataFetchAction(page));
  }, [page, dispatch]);

  return <CreateRoutes />;
};

export default App;
