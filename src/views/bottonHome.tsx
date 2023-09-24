import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

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
          <Typography variant='h3' sx={{ fontFamily: 'Playfair Display', color: 'white', textAlign: 'center' }}>
            Connecting Passionate Winemakers with Discerning Distributors
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6' sx={{ color: 'white', textAlign: 'center' }}>
            Meet some of the distributors who trusted in your Wine brands
          </Typography>
        </Grid>
        <Grid item xs={8} container justifyContent='center'>
          <Grid item>
            <img src="images/Links/logo Bravo supermercado.png" alt="" style={{ width: '120px', height: '50px', margin:'1rem' }} />
          </Grid>
          <Grid item>
            <img src="images/Links/LOGO COSTCO.png" alt="" style={{ width: '120px', height: '50px', margin:'1rem' }} />
          </Grid>
          <Grid item>
            <img src="images/Links//Logo CVS.png" alt="" style={{ width: '120px', height: '50px', margin:'1rem' }} />
          </Grid>
          <Grid item>
            <img src="images/Links/LOGO MEGA WINE.png" alt="" style={{ width: '120px', height: '50px', margin:'1rem' }} />
          </Grid>
          <Grid item>
            <img src="images/Links/LOGO NAVARRO.png" alt="" style={{ width: '120px', height: '50px', margin:'1rem' }} />
          </Grid>
          <Grid item>
            <img src="images/Links/LOGO PRESIDENTE.png" alt="" style={{ width: '120px', height: '50px', margin:'1rem' }} />
          </Grid>
          <Grid item>
            <img src="images/Links/LOGO PUBLIX.png" alt="" style={{ width: '120px', height: '50px', margin:'1rem' }} />
          </Grid>
          <Grid item>
            <img src="images/Links/logo sabor tropical.png" alt="" style={{ width: '120px', height: '50px', margin:'1rem' }} />
          </Grid>
          <Grid item>
            <img src="images/Links/LOGO SEDANOS.png" alt="" style={{ width: '120px', height: '50px', margin:'1rem' }} />
          </Grid>
          <Grid item>
            <img src="images/Links/LOGO WINNIE DIXIE.png" alt="" style={{ width: '120px', height: '50px', margin:'1rem' }} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BottonHome;
