// pages/index.tsx
import React from 'react';
import Layout from '../../components/Layout';
import Main from '../../views/main';
import { Box, Typography } from '@mui/material';

const AboutUsPage: React.FC = () => {
  const currentPage = 'aboutUs';
  return (
    <Layout currentPage={currentPage}>
        <Main/>
        <Box   sx={{maxWidth: '100vh', margin:'2rem auto' }}>
          <Typography variant="h4" sx={{fontFamily: 'Playfair Display', fontStyle: 'italic', margin:'1rem', textAlign: 'center' }}>
            At our cutting-edge company we've meticulously handpicked extraordinary winemakers spanning the breahtaking landscapes of Italy, Spain and Argentina.
          </Typography>
          <Box className="aboutUs-responsive" sx={{ display: 'flex', alignItems: 'center' }}>
            <Box style={{ flex: 1, textAlign: 'center' }}>
              <img src="/images/aboutUs/1.jpg" alt="" style={{ maxWidth: '90%', height: 'auto' }} />
            </Box>
            <Box className="margin-cont-about" style={{ flex: 1, textAlign: 'center',  margin:'2rem auto', maxWidth: '90%' }}>
              <Typography variant='h6' fontWeight='bold' sx={{textAlign:'left'}}>Our mission</Typography>
              <Typography variant='body1' sx={{textAlign:'left'}}>
                To give these talented artisans the opportunity to showcase their exceptional wines on the world stage. Our goal is to help winemakers build solid networks 
                and connect with top-tier distributors who share their unwavering passion and commitment.
              </Typography>
            </Box>
          </Box>
          <Box  className="aboutUs-responsive" sx={{ display: 'flex', alignItems: 'center' }}>
            <Box className="margin-cont-about" style={{ flex: 1, textAlign: 'center',  margin:'2rem auto', maxWidth: '90%'  }}>
            <Box className="mobile-img-block" style={{ flex: 1, textAlign: 'center' }}>
              <img src="/images/aboutUs/2.jpg" alt="" style={{ maxWidth: '100%', height: 'auto' }} />
            </Box>
              <Typography variant='h6' fontWeight='bold' sx={{textAlign:'left'}}>Our main focus</Typography>
              <Typography variant='body1' sx={{textAlign:'left'}}>
                Identifyng breackthrough producers who are making wines that pulse with energy, purity and perfect balance. We're on the lookout for those elusive bottles 
                that have an indescribable appeal and stand out from the rest. These are the wines that effortlessly harmonize with delicious cuisine and tempt you to take a 
                second sip.
              </Typography>
            </Box>
            <Box className="mobile-img-none" style={{ flex: 1, textAlign: 'center' }}>
              <img src="/images/aboutUs/2.jpg" alt="" style={{ maxWidth: '90%', height: 'auto' }} />
            </Box>
          </Box>
          <Box className="aboutUs-responsive" sx={{ display: 'flex', alignItems: 'center' }}>
            <Box style={{ flex: 1, textAlign: 'center' }}>
              <img src="/images/aboutUs/3.jpg" alt="" style={{ maxWidth: '90%', height: 'auto' }} />
            </Box>
            <Box className="margin-cont-about"  style={{ flex: 1, textAlign: 'center',  margin:'2rem auto', maxWidth: '90%' }}>
              <Typography variant='h6' fontWeight='bold' sx={{textAlign:'left'}}>We don't stop at exceptional wines.</Typography>
              <Typography variant='body1' sx={{textAlign:'left' }}>
                We know that quality human interaction is paramount. It's not just about curating an impressive wine portfolio, it's abotu fostering meaningful connections 
                between winemakers, distrubutos, retailers, restaurants and the discerning consumer, our focus on building strong relationships complements our commitment to 
                showcasing outstanding wines and brings the entire industry into the modern era.
              </Typography>
            </Box>
          </Box>
        </Box>
    </Layout>
  );
};

export default AboutUsPage;