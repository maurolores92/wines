import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const logosLinks = {
  logo1: 'images/Links/logo Bravo supermercado.png',
  logo2: 'images/Links/LOGO COSTCO.png',
  logo3: 'images/Links//Logo CVS.png',
  logo4: 'images/Links/LOGO MEGA WINE.png',
  logo5: 'images/Links/LOGO NAVARRO.png',
  logo6: 'images/Links/LOGO PRESIDENTE.png',
  logo7: 'images/Links/LOGO PUBLIX.png',
  logo8: 'images/Links/logo sabor tropical.png',
  logo9: 'images/Links/LOGO SEDANOS.png',
  logo10: 'images/Links/LOGO WINNIE DIXIE.png'
};

const StylesLogos = {
  width: '120px', 
  height: '50px', 
  margin:'1rem',
  '@media (max-width: 768px)': {
    width: '80px', 
    height: '20px',
    margin: '0.5rem',
  },
};

const BottonHome = () => {

  return (

    <Box sx={{ position: 'relative', width: '100%', display:'flex', justifyContent:'center' }}>
    <img
      src='images/Links/paisajeUrbano1.jpg'
      alt="Paisaje Urbano"
      style={{
        width: '100%',
        height: 'auto',
        clipPath: 'polygon(0% 0%, 50% 20%, 100% 0, 100% 100%, 0% 100%)',
      }}
    />

<Grid container sx={{ position: 'absolute', top: '30%', width:'60%', justifyContent:'center'}} spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h4' sx={{ fontFamily: 'Playfair Display', color: 'white', textAlign: 'center' }}>
            Connecting Passionate Winemakers with Discerning Distributors
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6' sx={{ color: 'white', textAlign: 'center' }}>
            Meet some of the distributors who trusted in your Wine brands
          </Typography>
        </Grid>
        <Grid item xs={20} sm={8} container justifyContent='center'>
          {Object.keys(logosLinks).map((logoKey) => (
            <Grid item key={logoKey}>
              <img
                src={logosLinks[logoKey]}
                alt={`Logo ${logoKey}`}
                style={StylesLogos}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
  </Box>
  );
};

export default BottonHome;
