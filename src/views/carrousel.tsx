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
          buttonText: 'LEARN MORE',
          image: '/images/baronDelTango/btCabernet.png',
        },
        {
          title: 'Valduero',
          subtitle: 'BODEGAS Y VIÑEROS',
          buttonText: 'LEARN MORE',
          image: '/images/baronDelTango/btCabernet.png',
        },
        {
          title: 'Valduero',
          subtitle: 'BODEGAS Y VIÑEROS',
          buttonText: 'LEARN MORE',
          image: '/images/baronDelTango/btCabernet.png',
        },
        {
          title: 'Valduero',
          subtitle: 'BODEGAS Y VIÑEROS',
          buttonText: 'LEARN MORE',
          image: '/images/baronDelTango/btCabernet.png',
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
                margin: '4rem auto',
                }}
            >
                <Box sx={{ marginRight: '2rem' }}>
                <Typography variant='h3' sx={{ fontFamily: 'Playfair Display', fontStyle: 'italic' }}>
                    {item.title}
                </Typography>
                <Typography sx={{ fontSize: '0.7rem', display: 'flex', justifyContent: 'right' }}>
                    {item.subtitle}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'right', borderRadius: '.7rem' }}>
                <Button variant='outlined'>
                    {item.buttonText}
                </Button>
                </Box>
                </Box>
                <Box>
                <img src={item.image} alt="" style={{ width: '120px' }} />
                </Box>
            </Box>
            </div>
        ))}
    </Carousel>
  );
}

export default CarouselHome;