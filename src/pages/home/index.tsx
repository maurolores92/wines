// pages/index.tsx
import React from 'react';
import Layout from '../../components/Layout';
import Main from '../../views/home/main';

const HomePage: React.FC = () => {
  const currentPage = 'home';
  return (
    <Layout currentPage={currentPage}>
      <Main/>
    </Layout>
  );
}; 

export default HomePage;