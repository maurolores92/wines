
import Layout from '../../components/Layout';
import Main from '../../views/main';
import { Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const StylesWines = {
  width:'80px', 
  height:'300px',
  marginTop:'4rem'
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
      <Box  sx={{maxWidth: '100vh', margin:'4rem auto', display:'flex', flexDirection:'column', textAlign:'center' }}>
      <Box>
        <Typography variant="h5"  sx={{fontFamily: 'Playfair Display', fontStyle: 'italic', fontWeight:'bold' }}>
          Introducing Baron del Tango, a fascinanting wine brand made with passion in the heart of Mendoza, Argentina, at the esteemed Falasco Winery. Our Wines are a tribute to 
          the enchanting world of tango, capturing its elegance, depth and captivating appeal.
        </Typography>
      </Box>
      <Box >
        <Typography  sx={{fontFamily: 'Montserrat', textAlign:'left', margin:'2rem auto'}}>
          Baron del Tango offers a collection of exceptional wines that reflect the spirit of this iconic dance. Our Cabernet Sauvignon features bold aromas of blackcurrant and 
          spice that seduce the palate with every sip. Malbec, with its sultry aromas of dark fruits and velvety tannins, will blow you away with its seductive charm. Our Red 
          Blend combines the different grape varieties in a seamless dance of vibrant flavors that create a harmonious picture on the palate. Our Chardonnay, on the other hand, 
          enchants with delicate nuances of tropical fruit and a subtle interplay of oak that exudes grace and finesse
        </Typography>
        <Typography sx={{fontFamily: 'Montserrat', textAlign:'left',  margin:'2rem auto'}}>
          Celebrate the timeless connection between the art of winemaking and the passion of tango with Baron del Tango. Let yourself be seduced by the seductive synergy of
           flavors, enjoy the embrace of the terroir of Mendoza, and let our wines be your partner to unleash the magic of the dance. Experience the rhythmic poetry of baron 
           del tango and embark on a journey of elegance and magic
        </Typography>
      </Box>
      </Box>
      {winesData.map((wineCategory) => (
  <Box
    key={Object.keys(wineCategory)[0]}
    sx={{ maxWidth: '100vh', margin: '1rem auto', display: 'flex', flexDirection: 'column', textAlign: 'center' }}
  >
    <Box>
      <Typography variant='h5' sx={{ fontFamily: 'Playfair Display', textAlign: 'left', fontWeight: 'bold', color: '#792c4b' }}>
      <u>Baron del Tango</u> {Object.keys(wineCategory)[0]}
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      {wineCategory[Object.keys(wineCategory)[0]].map((wine) => (
        <div key={wine.id}>
          <img src={wine.image} alt="" style={StylesWines} />
          <Typography variant='body2' sx={{ fontFamily: 'Playfair Display', textAlign: 'center', fontWeight: 'bold', color: '#3d2c79' }}>
            {wine.title}
          </Typography>
        </div>
      ))}
    </Box>
  </Box>
))}
    </Layout>
  );
};

export default OurBrandsPage;