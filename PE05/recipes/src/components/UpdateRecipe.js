import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Grid, Typography } from '@mui/material';
import axios from 'axios';

const UpdateRecipe = ({ onUpdate }) => {
    const API_URL = "http://localhost:5000/api"
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState({ name: '', ingredients: '', instructions: '', prepTime: '', cookTime: '', servings: '' });

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get(`${API_URL}/recipes/${id}`);
                const { name, ingredients, instructions, prepTime, cookTime, servings } = response.data;
                setRecipe({ name, ingredients: ingredients.join(', '), instructions, prepTime, cookTime, servings });
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };
        fetchRecipe();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const ingredientsArray = recipe.ingredients.split(',').map(ing => ing.trim());
            const updatedRecipe = { ...recipe, ingredients: ingredientsArray };
            await axios.put(`${API_URL}/recipes/${id}`, updatedRecipe);
            onUpdate();
            navigate('/');
        } catch (error) {
            console.error('Error updating recipe:', error);
        }
    };

    return (
        <Grid container sx={{ paddingTop: '80px', padding: '1rem' }}>
            <Grid item xs={12} sx={{ maxWidth: '600px', margin: '0 auto' }}>
                <Typography variant="h4" gutterBottom>Update Recipe</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField fullWidth label="Name" name="name" value={recipe.name} onChange={handleChange} margin="normal" />
                    <TextField fullWidth label="Ingredients (comma-separated)" name="ingredients" value={recipe.ingredients} onChange={handleChange} margin="normal" />
                    <TextField fullWidth label="Instructions" name="instructions" value={recipe.instructions} onChange={handleChange} margin="normal" multiline rows={4} />
                    <TextField fullWidth label="Prep Time" name="prepTime" value={recipe.prepTime} onChange={handleChange} margin="normal" />
                    <TextField fullWidth label="Cook Time" name="cookTime" value={recipe.cookTime} onChange={handleChange} margin="normal" />
                    <TextField fullWidth label="Servings" name="servings" value={recipe.servings} onChange={handleChange} margin="normal" type="number" />
                    <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
                        Update Recipe
                    </Button>
                </form>
            </Grid>
        </Grid>
    );
};

export default UpdateRecipe;