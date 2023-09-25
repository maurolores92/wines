import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { useRouter } from 'next/router';


const Main: React.FC = () => {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData.descriptionMain);
      })
      .catch((error) => {
        console.error('Error loading data:', error);
      });
  }, []);

  const currentRoute = router.pathname.replace('/', '').toLowerCase().replace(' ', '');
  const currentData = data.find((item) => item.route.toLowerCase().replace(' ', '') === currentRoute);

  // Extrae la ruta de la imagen desde el JSON (si existe)
  const backgroundImage = currentData && currentData.image ? currentData.image : '/images/Links/vineyard_home3.png';

  return (
    <Box
    sx={{
      position: 'relative',
      textAlign: 'center',
      overflow: 'hidden',
    }}
  >
    <img
      src={backgroundImage}
      alt="Background Image"
      className="responsive-image-main"
      style={{
        width: '100%',
        clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)',
      }}
    />

    {currentData && (
      <Typography
        variant="h5"
        sx={{
          fontFamily: 'Playfair Display',
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '24px', // Tamaño de fuente para móviles (ajusta según tus preferencias)
          '@media (min-width: 768px)': {
            fontSize: '32px', // Tamaño de fuente para escritorio (ajusta según tus preferencias)
          },
        }}
      >
        {currentData.title}
      </Typography>
    )}
    {currentData && (
      <Typography
        variant="h4"
        sx={{
          fontFamily: 'Playfair Display',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '1.5rem', // Tamaño de fuente para móviles (ajusta según tus preferencias)
          '@media (min-width: 1000px)': {
            fontSize: '2rem', // Tamaño de fuente para escritorio (ajusta según tus preferencias)
          },
        }}
      >
        {currentData.description}
      </Typography>
    )}
  </Box>
);
};

export default Main;
