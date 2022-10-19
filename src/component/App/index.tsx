import CreateRoutes from 'container/Route';
import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import React, { useEffect } from 'react';
import { dataFetchAction } from 'store/data/thunk';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(dataFetchAction(1));
  }, [dispatch]);

  return <CreateRoutes />;
};

export default App;
