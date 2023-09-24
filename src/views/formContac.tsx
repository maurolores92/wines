import React from 'react';
import { Grid, TextField, Button } from '@mui/material';

const ContactForm = () => {
  return (
    <form style={{ width: '100vh' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Name"
            placeholder="Enter your name"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Surname"
            placeholder="Enter your surname"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email Address"
            placeholder="Enter your email address"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
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
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: '#792c4b',
              marginTop: '2rem',
              padding: '.6rem',
              fontWeight: 'bold',
            }}
          >
            Send Message
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
