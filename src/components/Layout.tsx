import React, { ReactNode, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Menu,
  MenuItem,
  Button,
} from '@mui/material';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: ReactNode;
  currentPage: string;
}

const pages = ['home', 'ourBrands', 'aboutUs', 'contact'];

const Layout: React.FC<LayoutProps> = ({ currentPage, children }) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorEl(null);
  };

  const StylesWines = {
    textDecoration: 'none',
    color: 'inherit',
    paddin:'0', 
    fontFamily: 'Montserrat',
  };
  

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/home"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#792c4b',
                textDecoration: 'none',
                paddingRight: '1.5rem',
              }}
            >
              LOGO
            </Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            {pages.map((page, index) => (
              <React.Fragment key={page}>
                {page === 'ourBrands' ? (
                  <Button
                    onClick={handleOpenNavMenu}
                    sx={{
                      my: 2,
                      borderRadius: '.5rem',
                      color: currentPage === page ? 'white' : '#792c4b',
                      fontWeight: 'bold',
                      backgroundColor: currentPage === page ? '#792c4b' : 'transparent',
                      padding: currentPage === page ? '0 1.5rem' : '0 1.5rem',
                    }}
                  >
                    {page}
                  </Button>
                ) : (
                  <a href={`/${page}`} style={{ textDecoration: 'none' }}>
                    <Button
                      sx={{
                        my: 2,
                        borderRadius: '.5rem',
                        color: currentPage === page ? 'white' : '#792c4b',
                        fontWeight: 'bold',
                        backgroundColor: currentPage === page ? '#792c4b' : 'transparent',
                        padding: currentPage === page ? '0 1.5rem' : '0 1.5rem',
                      }}
                    >
                      {page}
                    </Button>
                  </a>
                )}
              </React.Fragment>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Container
        style={{
          maxWidth: 'none',
          paddingLeft: 0,
          paddingRight: 0,
          maxHeight: '600px',
        }}
      >
        {children}
      </Container>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseNavMenu}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}>
      
        <Box sx={{display:'flex', backgroundColor: '#792c4b', color: 'white'}}>
          <Box sx={{padding:'2rem'}}>
            <MenuItem sx={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius:'.6rem', padding:'0'}}><Typography variant="h6" sx={{paddingLeft:'1rem'}}>ARGENTINA</Typography></MenuItem>
            <MenuItem sx={StylesWines}><a href="/ourBrands">Baron Del Tango</a></MenuItem>
            <MenuItem sx={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius:'.6rem', padding:'0'}}><Typography variant="h6" sx={{paddingLeft:'1rem'}}>SPAIN</Typography></MenuItem>
            <MenuItem sx={StylesWines}><a href="/wine1">Valduero</a></MenuItem>
            <MenuItem sx={StylesWines}><a href="/wine2">Virgen de la Asuncion</a></MenuItem>
            <MenuItem sx={StylesWines}><a href="/wine3">Familia Escudero</a></MenuItem>
          </Box>
          <Box sx={{padding:'2rem'}}>
            <MenuItem sx={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius:'.6rem', padding:'0'}}><Typography variant="h6" sx={{paddingLeft:'1rem'}}>ITALY</Typography></MenuItem>
            <MenuItem sx={StylesWines}><a href="/wine4" >Santerno</a></MenuItem>
            <MenuItem sx={StylesWines}><a href="/wine5">Tenute D'Italia</a></MenuItem>
            <MenuItem sx={StylesWines}><a href="/wine6">Perlino</a></MenuItem>
            <MenuItem sx={StylesWines}><a href="/wine7">Menicucci</a></MenuItem>
            <MenuItem sx={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius:'.6rem', padding:'0'}}><Typography variant="h6" sx={{paddingLeft:'1rem'}}>Spain</Typography></MenuItem>
            <MenuItem sx={StylesWines}><a href="/wine8">Marquez De Taberna</a></MenuItem>
          </Box>
        </Box>
      </Menu>
    </Box>
  );
};

export default Layout;