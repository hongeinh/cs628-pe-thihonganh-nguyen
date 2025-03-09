import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

const RecipeList = ({ recipes, onDelete }) => {
    return (
        <Grid container spacing={2} sx={{ paddingTop: '80px', padding: '1rem' }}>
            {recipes.map((recipe) => (
                <Grid item xs={12} sm={6} md={4} key={recipe._id}>
                    <Card sx={{ backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: 2 }}>
                        <CardContent>
                            <Typography variant="h5" component={Link} to={`/recipe/${recipe._id}`} sx={{ textDecoration: 'none', color: '#fdcb00' }}>
                                {recipe.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Ingredients: {recipe.ingredients.join(', ')}
                            </Typography>
                            <Button variant="contained" color="error" onClick={() => onDelete(recipe._id)} sx={{ mt: 1 }}>
                                Delete
                            </Button>
                            <Button variant="contained" color="primary" component={Link} to={`/update/${recipe._id}`} sx={{ mt: 1, ml: 1 }}>
                                Update
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default RecipeList;