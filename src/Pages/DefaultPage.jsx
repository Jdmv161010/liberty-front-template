import React from 'react';
import LibertyFooter from '../components/basics/LibertyFooter/LibertyFooter';
import LibertyHeader from '../components/basics/LibertyHeader/LibertyHeader';

const DefaultPage = () => {
  return (
    <div>
      <LibertyHeader userName="Maria Lucia Hernandez" />
      <LibertyFooter />
    </div>
  );
};

export default DefaultPage;
