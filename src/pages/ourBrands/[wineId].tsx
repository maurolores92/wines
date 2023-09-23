import React from 'react';
import winesData from '../../../public/data.json';
import { useRouter } from 'next/router';
import { Container, Typography, List, ListItem, ListItemText, Box } from '@mui/material';
import Image from 'next/image';

const WinePage = ({ wine }) => {
  if (!wine) {
    return <div>Vino no encontrado</div>;
  }

  const { wineId } = useRouter().query;
  const wineDetails = wine.find((wineItem) => wineItem.hasOwnProperty(wineId));

  if (!wineDetails) {
    return <div>Vino no encontrado</div>;
  }

  const wineInfo = wineDetails[wineId];

  return (
    <Container maxWidth="md" sx={{display:'flex'}}>
      <Box>
      <Image src={wineDetails.image} alt={wineDetails.title} width={300} height={400} />
      </Box>
      <Box>
      <Typography variant="h6">
        {wineInfo.title}
      </Typography>
      <Typography variant="h5" color="textSecondary">
        {wineInfo.type}
      </Typography>
      <Typography variant="subtitle2" color="textSecondary">
        {wineInfo.region}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Tasting Notes
      </Typography>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
    {wineInfo["Tasting Notes"].map((note, index) => (
      <div key={index}>
        <Typography variant="body2">Color: {note.Color}</Typography>
        <Typography variant="body2">Aroma: {note.Aroma}</Typography>
        <Typography variant="body2">Mouth: {note.Mouth}</Typography>
      </div>
    ))}
  </div>
      <Typography variant="subtitle1" color="textSecondary">
        Maridaje: {wineInfo.Pairing}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Alc/Vol: {wineInfo["Alc/Vol"]}
      </Typography>
      </Box>
    </Container>
  );
};

export async function getStaticPaths() {
  const wineNames = Object.keys(winesData.wines[0]);

  const paths = wineNames.map((name) => ({
    params: { wineId: name },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const wine = winesData.wines;

  return {
    props: {
      wine,
    },
  };
}

export default WinePage;

