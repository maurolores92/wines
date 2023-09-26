import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function CarouselHome() {
    const carouselItems = [
        {
          title: 'Valduero',
          subtitle: 'BODEGAS Y VIÑEROS',
          imageTitle: '/images/carrousel/logo01valduero.png',
          buttonText: 'LEARN MORE',
          image: '/images/carrousel/01valduero.png',
        },
        {
          title: 'Valduero',
          subtitle: 'BODEGAS Y VIÑEROS',
          imageTitle: '/images/carrousel/logo02trus.png',
          buttonText: 'LEARN MORE',
          image: '/images/carrousel/02trust.png',
        },
        {
          title: 'Valduero',
          subtitle: 'BODEGAS Y VIÑEROS',
          imageTitle: '/images/carrousel/logo03btmalbec.png',
          buttonText: 'LEARN MORE',
          image: '/images/carrousel/03btmalbec.png',
        },
        {
          title: 'Valduero',
          subtitle: 'BODEGAS Y VIÑEROS',
          imageTitle: '/images/carrousel/logo04filipetti.png',
          buttonText: 'LEARN MORE',
          image: '/images/carrousel/04filipetti.png',
        },
        
      ];

  return (
    <Carousel showStatus={false} showThumbs={false} infiniteLoop autoPlay interval={8000}>
        {carouselItems.map((item, index) => (
            <div key={index}>
            <Box
                sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '4rem 2rem',
                }}
            >
                <Box sx={{ marginRight: '2rem' }}>
                  <img src={item.imageTitle} alt="" style={{maxWidth:'400px'}} />
                     
                <Box sx={{ display: 'flex', justifyContent: 'center', borderRadius: '.7rem' }}>
                  <Button variant='outlined'> {item.buttonText} </Button>
                </Box>
                </Box>
                <Box >
                  <img src={item.image} alt="" style={{ width: '100px',  height: 'auto' }} />
                </Box>
            </Box>
            </div>
        ))}
    </Carousel>
  );
}

export default CarouselHome;