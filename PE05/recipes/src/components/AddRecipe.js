import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Grid, Typography } from '@mui/material';
import axios from 'axios';


const AddRecipe = ({ onAdd }) => {
    const API_URL = 'http://localhost:5000/api';
    const [recipe, setRecipe] = useState({ name: '', ingredients: '', instructions: '', prepTime: '', cookTime: '', servings: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const ingredientsArray = recipe.ingredients.split(',').map(ing => ing.trim());
            const newRecipe = { ...recipe, ingredients: ingredientsArray };
            await axios.post(`${API_URL}/recipes`, newRecipe);
            onAdd();
            navigate('/');
        } catch (error) {
            console.error('Error adding recipe:', error);
        }
    };

    return (
        <Grid container sx={{ paddingTop: '80px', padding: '1rem' }}>
            <Grid item xs={12} sx={{ maxWidth: '600px', margin: '0 auto' }}>
                <Typography variant="h4" gutterBottom>Add New Recipe</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={recipe.name}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Ingredients (comma-separated)"
                        name="ingredients"
                        value={recipe.ingredients}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Instructions"
                        name="instructions"
                        value={recipe.instructions}
                        onChange={handleChange}
                        margin="normal"
                        multiline
                        rows={4}
                    />
                    <TextField
                        fullWidth
                        label="Prep Time"
                        name="prepTime"
                        value={recipe.prepTime}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Cook Time"
                        name="cookTime"
                        value={recipe.cookTime}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Servings"
                        name="servings"
                        value={recipe.servings}
                        onChange={handleChange}
                        margin="normal"
                        type="number"
                    />
                    <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
                        Add Recipe
                    </Button>
                </form>
            </Grid>
        </Grid>
    );
};

export default AddRecipe;