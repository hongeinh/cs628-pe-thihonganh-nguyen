import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Grid, Chip } from '@mui/material';
import { Link } from 'react-router-dom';

const RecipeDetail = ({ recipes, onDelete }) => {
  const { id } = useParams();
  const recipe = recipes.find(r => r._id === id);

  if (!recipe) return <Typography variant="h6">Recipe not found</Typography>;

  return (
    <Grid container sx={{ paddingTop: '80px', padding: '1rem', alignContent: 'left' }}>
      <Grid item xs={12}>
        <Card sx={{ backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: 2, maxWidth: '600px', margin: '0 auto' }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>{recipe.name}</Typography>
            <Typography variant="h6">Ingredients:</Typography>
            {recipe.ingredients.map((ing, index) => (
              <Chip
                key={index}
                label={ing}
                sx={{
                  background: "#fdcb00",
                  color: "#333333",
                  fontWeight: '500'
                }}
              />


            ))}

            <Typography variant="h6">Instructions:</Typography>
            <Typography paragraph>{recipe.instructions}</Typography>
            <Typography variant="body1">Prep Time: {recipe.prepTime}</Typography>
            <Typography variant="body1">Cook Time: {recipe.cookTime}</Typography>
            <Typography variant="body1">Servings: {recipe.servings}</Typography>
            <Button variant="contained" color="error" onClick={() => onDelete(recipe._id)} sx={{ mt: 2 }}>
              Delete
            </Button>
            <Button variant="contained" color="primary" component={Link} to={`/update/${recipe._id}`} sx={{ mt: 2, ml: 1 }}>
              Update
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default RecipeDetail;