import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Paper, Box } from '@mui/material';

function AddCity({ setCities }) {
  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [population, setPopulation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setCities((prevCities) => [
      ...prevCities,
      { id: prevCities.length + 1, name: cityName, country, population },
    ]);

    navigate('/cities');
  };

  return (
    <Paper sx={{ padding: 3, backgroundColor: '#333333' }}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="City Name"
            fullWidth
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            InputLabelProps={{ style: { color: '#ffffff' } }}
            InputProps={{ style: { color: '#ffffff' } }}
            sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#616161' }, '&:hover fieldset': { borderColor: '#ffffff' } } }}
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="Country"
            fullWidth
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            InputLabelProps={{ style: { color: '#ffffff' } }}
            InputProps={{ style: { color: '#ffffff' } }}
            sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#616161' }, '&:hover fieldset': { borderColor: '#ffffff' } } }}
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="Population"
            fullWidth
            value={population}
            onChange={(e) => setPopulation(e.target.value)}
            InputLabelProps={{ style: { color: '#ffffff' } }}
            InputProps={{ style: { color: '#ffffff' } }}
            sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#616161' }, '&:hover fieldset': { borderColor: '#ffffff' } } }}
          />
        </Box>
        <Button 
          type="submit" 
          variant="contained" 
          sx={{ 
            backgroundColor: '#424242', 
            color: '#ffffff', 
            '&:hover': { backgroundColor: '#616161' }
          }}
        >
          Add City
        </Button>
      </form>
    </Paper>
  );
}

export default AddCity;