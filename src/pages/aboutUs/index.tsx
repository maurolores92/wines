// pages/index.tsx
import React from 'react';
import Layout from '../../components/Layout';
import Main from '../../views/home/main';
import { Box, Typography } from '@mui/material';

const AboutUsPage: React.FC = () => {
  const currentPage = 'aboutUs';
  return (
    <Layout currentPage={currentPage}>
        <Main/>
        <Box sx={{maxWidth: '100vh', margin:'4rem auto' }}>
          <Typography variant="h4" sx={{fontFamily: 'Playfair Display', fontStyle: 'italic' }}>
            At our cutting-edge company we've meticulously handpicked extraordinary winemakers spanning the breahtaking landscapes of Italy, Spain and Argentina.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box style={{ flex: 1, textAlign: 'center' }}>
              <img src="/images/aboutUs/1.jpg" alt="" style={{ maxWidth: '90%', height: 'auto' }} />
            </Box>
            <Box style={{ flex: 1, textAlign: 'center',  margin:'4rem auto',  }}>
              <Typography variant='h6' fontWeight='bold'>Our mission</Typography>
              <Typography variant='body1' sx={{textAlign:'justify',  maxWidth: '90%' , margin:'0 auto' }}>
                To give these talented artisans the opportunity to showcase their exceptional wines on the world stage. Our goal is to help winemakers build solid networks 
                and connect with top-tier distributors who share their unwavering passion and commitment.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box style={{ flex: 1, textAlign: 'center',  margin:'4rem auto',  }}>
              <Typography variant='h6' fontWeight='bold'>Our main focus</Typography>
              <Typography variant='body1' sx={{textAlign:'justify',  maxWidth: '90%' , margin:'0 auto'}}>
                Identifyng breackthrough producers who are making wines that pulse with energy, purity and perfect balance. We're on the lookout for those elusive bottles 
                that have an indescribable appeal and stand out from the rest. These are the wines that effortlessly harmonize with delicious cuisine and tempt you to take a 
                second sip.
              </Typography>
            </Box>
            <Box style={{ flex: 1, textAlign: 'center' }}>
              <img src="/images/aboutUs/2.jpg" alt="" style={{ maxWidth: '90%', height: 'auto' }} />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box style={{ flex: 1, textAlign: 'center' }}>
              <img src="/images/aboutUs/3.jpg" alt="" style={{ maxWidth: '90%', height: 'auto' }} />
            </Box>
            <Box style={{ flex: 1, textAlign: 'center',  margin:'4rem auto'}}>
              <Typography variant='h6' fontWeight='bold'>We don't stop at exceptional wines.</Typography>
              <Typography variant='body1' sx={{textAlign:'justify',  maxWidth: '90%' , margin:'0 auto' }}>
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