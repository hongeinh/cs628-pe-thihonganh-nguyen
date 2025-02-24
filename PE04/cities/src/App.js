import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import CityList from './CityList';
import AddCity from './AddCity';
import CityDetail from './CityDetail';

function App() {
  const [cities, setCities] = useState([
    { id: 1, name: 'Seattle', country: 'USA', population: 733_000 },
    { id: 2, name: 'New York', country: 'USA', population: 8_000_000 },
  ]);

  return (
    <Router>
      <div style={{ backgroundColor: '#212121', minHeight: '100vh' }}>
        <AppBar position="sticky" sx={{ backgroundColor: '#000000' }}>
          <Toolbar sx={{ justifyContent: 'center' }}>
            <Typography variant="h6" sx={{ color: '#ffffff', fontSize: 24, fontWeight: 'bold' }}>
              City App
            </Typography>
          </Toolbar>
        </AppBar>

        <Container sx={{ marginTop: 4 }}>
          <nav style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            marginBottom: '2rem' // Adds spacing below the nav
          }}>
            <Button 
              component={Link} 
              to="/cities" 
              sx={{ 
                marginRight: 2,
                backgroundColor: '#424242',
                color: '#ffffff',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#616161' },
              }}
            >
              Cities List
            </Button>
            <Button 
              component={Link} 
              to="/add-city" 
              sx={{ 
                backgroundColor: '#424242',
                color: '#ffffff',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#616161' },
              }}
            >
              Add City
            </Button>
          </nav>

          <Routes>
            <Route path="/" element={<Navigate to="/cities" />} />
            <Route path="/cities" element={<CityList cities={cities} />} />
            <Route path="/add-city" element={<AddCity setCities={setCities} />} />
            <Route path="/city/:id" element={<CityDetail cities={cities} />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;