
import Layout from '../../components/Layout';
import Main from '../../views/main';
import { Box, Typography, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';

const StylesWines = {
  width:'80px', 
  height:'300px',
  margin:'2rem',
};



const OurBrandsPage: React.FC = () => {
  const currentPage = 'ourBrands';
  const [winesData, setWinesData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((jsonData) => {
        if (jsonData.baronDelTango) {
          setWinesData(jsonData.baronDelTango);
        }
      })
      .catch((error) => {
        console.error('Error loading data:', error);
      });
  }, []);

  return (
    <Layout currentPage={currentPage}>
      <Main/>
      <Grid container spacing={2} sx={{ maxWidth: '100vh', margin: '2rem auto', flexDirection: 'column', textAlign: 'center' }}>
      <Grid item>
        <Typography variant="h5" sx={{ fontFamily: 'Playfair Display', fontStyle: 'italic', fontWeight: 'bold' }}>
          Introducing Baron del Tango, a fascinating wine brand made with passion in the heart of Mendoza, Argentina, at the esteemed Falasco Winery. Our Wines are a tribute to
          the enchanting world of tango, capturing its elegance, depth and captivating appeal.
        </Typography>
      </Grid>
      <Grid item>
        <Typography className='ourBrands-none' sx={{ fontFamily: 'Montserrat', textAlign: 'left', margin: '2rem auto' }}>
          Baron del Tango offers a collection of exceptional wines that reflect the harmonious picture on the palate. Our Chardonnay, on the other hand,
          enchants with delicate nuances of tropical fruit and a subtle interplay of oak that exudes grace and finesse.
        </Typography>
        <Typography className='ourBrands-none' sx={{ fontFamily: 'Montserrat', textAlign: 'left', margin: '2rem auto' }}>
          Celebrate the timeless connection between the art of winemaking and the passion of tango with Baron del Tango. Let yourself be seduced by the seductive synergy of
          flavors, enjoy the embrace of the terroir of Mendoza, and let our wines be your partner to unleash the magic of the dance. Experience the rhythmic poetry of Baron
          del Tango and embark on a journey of elegance and magic.
        </Typography>
      </Grid>
      {winesData.map((wineCategory) => (
        <Grid
          key={Object.keys(wineCategory)[0]}
          container
          spacing={2}
          item
          sx={{ maxWidth: '100vh', margin: '1rem auto', flexDirection: 'column', textAlign: 'center' }}
        >
          <Grid item>
            <Typography variant='h5' sx={{ fontFamily: 'Playfair Display', textAlign: 'left', fontWeight: 'bold', color: '#792c4b' }}>
              <u>Baron del Tango</u> {Object.keys(wineCategory)[0]}
            </Typography>
          </Grid>
          <Grid item container justifyContent="space-around" alignItems="center">
            {wineCategory[Object.keys(wineCategory)[0]].map((wine) => (
              <Grid item key={wine.id}>
                <div>
                  <img src={wine.image} alt="" style={StylesWines} />
                  <Typography variant='body2' sx={{ fontFamily: 'Playfair Display', textAlign: 'center', fontWeight: 'bold', color: '#3d2c79' }}>
                    {wine.title}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
    </Layout>
  );
};

export default OurBrandsPage;