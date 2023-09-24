// pages/index.tsx
import React from 'react';
import Layout from '../../components/Layout';
import Main from '../../views/main';
import { Box } from '@mui/material';
import ContactForm from '../../views/formContac';


const ContactPage: React.FC = () => {
  const currentPage = 'contact';
  return (
    <Layout currentPage={currentPage}>
      <Main/>
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin:'2rem' }}>
      <ContactForm/>
    </Box>
    </Layout>
  );
};

export default ContactPage;
