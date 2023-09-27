import React, { useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';

const ContactForm = () => {
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('enviar-correo.php', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitMessage('El correo se envió correctamente.');
      } else {
        setSubmitMessage('Hubo un problema al enviar el correo.');
      }
    } catch (error) {
      console.error('Error al enviar el formulario', error);
      setSubmitMessage('Hubo un error al enviar el formulario.');
    }
  };

  return (
    <form style={{ width: '100vh' }} action="enviar-correo.php" method="POST" onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Name"
            placeholder="Enter your name"
            fullWidth
            variant="outlined"
            name="name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Surname"
            placeholder="Enter your surname"
            fullWidth
            variant="outlined"
            name="surname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email Address"
            placeholder="Enter your email address"
            fullWidth
            variant="outlined"
            name="email"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Phone"
            placeholder="Enter your phone number"
            fullWidth
            variant="outlined"
            name="phone"
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
            name="comments"
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
            id="submitButton"
          >
            Send Message
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
