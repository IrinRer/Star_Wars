import React, { lazy, Suspense } from 'react';
import Error from 'component/Error';
import ErrorBoundary from 'component/ErrorBoundary';
import { ROUTES } from 'constants/route';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Loader from 'component/Loader';

const CreateRoutes: React.FC = () => {
  const Home = lazy(() => import('pages/Home'));
  const Characters = lazy(() => import('pages/Characters'));
  
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader dark={false}/>}>
        <ErrorBoundary>
          <Routes>
            <Route path={ROUTES.home.path} element={<Home />} />
            <Route path={ROUTES.characters.path} element={<Characters />} />
            <Route
              path={ROUTES.notFound.path}
              element={<Error text={ROUTES.notFound.name} />}
            />
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </BrowserRouter>
  );
};

export default CreateRoutes;
