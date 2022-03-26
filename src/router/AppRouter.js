import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DefaultPage from '../Pages/DefaultPage';

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
