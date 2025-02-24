import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, Grid } from '@mui/material';

function CityList({ cities }) {
  return (
    <div>
      <Grid container spacing={2}>
        {cities.map((city) => (
          <Grid item xs={12} sm={6} md={4} key={city.id}>
            <Card 
              component={Link} 
              to={`/city/${city.id}`} 
              sx={{ 
                backgroundColor: '#333333',
                textDecoration: 'none',
                minHeight: '100px',
                display: 'block',
                '&:hover': { 
                  backgroundColor: '#424242',
                  cursor: 'pointer'
                }
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ color: '#ffffff' }}>
                  {city.name}
                </Typography>
                <Typography sx={{ color: '#ffffff' }}>
                  {city.country}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CityList;