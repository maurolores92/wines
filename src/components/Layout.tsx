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
  Drawer,
  IconButton,
} from '@mui/material';
import { useRouter } from 'next/router';
import MenuIcon from '@mui/icons-material/Menu'; 

interface LayoutProps {
  children: ReactNode;
  currentPage: string;
}

const pages = ['home', 'ourBrands', 'aboutUs', 'contact'];

const Layout: React.FC<LayoutProps> = ({ currentPage, children }) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const StylesWines = {
    textDecoration: 'none',
    color: 'inherit',
    padding: '0',
    fontFamily: 'Montserrat',
  };

  return (
    <Box>
      <Box>
      <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{  display: 'flex', margin: '0 auto', color: '#792c4b'}}>
        <Box>
            <img src="/images/logo-wine-nation.svg" alt="" style={{width:'100px', height:'60px', margin:'0 2rem'}} />
          </Box>
          <Box sx={{  display: { xs: 'none', sm: 'flex' } }}>
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
          </Box>
          {/* Mobile Menu Icon */}
          <IconButton
            onClick={handleOpenMobileMenu}
            sx={{ display: { xs: 'block', sm: 'none', color: '#792c4b' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer anchor="right" open={isMobileMenuOpen} onClose={handleCloseMobileMenu}>
        
        <Box
          sx={{
            width: 250,
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => {
                handleCloseMobileMenu();
                router.push(`/${page}`);
              }}
              sx={{
                my: 2,
                color: currentPage === page ? 'white' : '#792c4b',
                fontWeight: 'bold',
                backgroundColor: currentPage === page ? '#792c4b' : 'transparent',
                padding: '0 1.5rem',
                width: '100%',
                textAlign: 'left',
              }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Drawer>
    </Box>
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
      
    </Box>
    
  );
};

export default Layout;