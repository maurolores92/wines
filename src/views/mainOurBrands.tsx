import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { useRouter } from 'next/router';

const MainOurBrands: React.FC = () => {
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

  return (
    <Box
      sx={{
        position: 'relative',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      <img
        src="/images/baronDelTango/FONDOBARONDETANGO_11.jpg"
        alt="Background Image"
        style={{
          width: '100%',
          height: 'auto',
          clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)',
        }}
      />
      {currentData && (
        <Typography
          variant="h3"
          style={{
            fontFamily: 'Playfair Display',
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
          }}
        >
          {currentData.description}
        </Typography>
      )}
    </Box>
  );
};

export default MainOurBrands;