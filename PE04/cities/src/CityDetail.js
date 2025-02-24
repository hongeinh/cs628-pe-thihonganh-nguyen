import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Paper, CircularProgress } from '@mui/material';

function CityDetail({ cities }) {
  const { id } = useParams();
  const city = cities.find((city) => city.id === parseInt(id));

  if (!city) return <CircularProgress sx={{ color: '#ffffff' }} />;

  return (
    <Paper sx={{ padding: 3, backgroundColor: '#333333' }}>
      <Typography variant="h3" gutterBottom sx={{ color: '#ffffff' }}>
        {city.name}
      </Typography>
      <Typography variant="h6" sx={{ color: '#ffffff' }}>
        Country: {city.country}
      </Typography>
      <Typography variant="h6" sx={{ color: '#ffffff' }}>
        Population: {city.population}
      </Typography>
    </Paper>
  );
}

export default CityDetail;