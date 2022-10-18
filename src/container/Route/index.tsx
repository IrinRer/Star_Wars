import Error from 'component/Error';
import ErrorBoundary from 'component/ErrorBoundary';
import Header from 'component/Header';
import { ROUTES } from 'constants/route';
import Characters from 'pages/Characters';
import Home from 'pages/Home';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const CreateRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Header />
        <Routes>
          <Route path={ROUTES.home.path} element={<Home />} />
          <Route path={ROUTES.characters.path} element={<Characters />} />
          <Route
            path={ROUTES.notFound.path}
            element={<Error text="Not Found" />}
          />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default CreateRoutes;
