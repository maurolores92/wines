// pages/index.tsx
import React from 'react';
import Layout from '../components/Layout';
import Main from '../views/main';
import BottonHome from '../views/bottonHome';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselHome from '../views/carrousel';
import Footer from '../components/footer';

const HomePage: React.FC = () => {

  const currentPage = '';
  return (
    <Layout currentPage={currentPage}>
      <Main/>
      <CarouselHome/>
      <BottonHome/>
      <Footer />
    </Layout>
  );
}; 

export default HomePage;


