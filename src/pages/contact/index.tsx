// pages/index.tsx
import React from 'react';
import Layout from '../../components/Layout';
import Main from '../../views/home/main';
import { Box, Button, Grid, TextField } from '@mui/material';


const ContactPage: React.FC = () => {
  const currentPage = 'contact';
  return (
    <Layout currentPage={currentPage}>
      <Main/>
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin:'5rem'
      }}
    >
      <form
        style={{
          width: '80vh',
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              label="Name"
              placeholder="Enter your name"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Surname"
              placeholder="Enter your surname"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Email Address"
              placeholder="Enter your email address"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Phone"
              placeholder="Enter your phone number"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Comments / Questions"
              placeholder="Write your comments or questions here"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Button type="submit"  variant="contained" sx={{backgroundColor: '#792c4b', marginTop:'2rem', padding:'.6rem', fontWeight:'bold'}}>Send Message</Button>
      </form>
    </Box>
    </Layout>
  );
};

export default ContactPage;
