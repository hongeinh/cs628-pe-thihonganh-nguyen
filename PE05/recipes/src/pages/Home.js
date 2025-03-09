import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import RecipeList from '../components/RecipeList';
import RecipeDetails from '../components/RecipeDetail';
import AddRecipe from '../components/AddRecipe';
import UpdateRecipe from '../components/UpdateRecipe';
import axios from 'axios';

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();
    const API_URL = 'http://localhost:5000/api';
    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            const response = await axios.get(`${API_URL}/recipes`);
            setRecipes(response.data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/recipes/${id}`);
            fetchRecipes();
        } catch (error) {
            console.error('Error deleting recipe:', error);
        }
    };

    return (
        <div className="home">
            <Routes>
                <Route path="/" element={<RecipeList recipes={recipes} onDelete={handleDelete} />} />
                <Route path="/recipe/:id" element={<RecipeDetails recipes={recipes} onDelete={handleDelete} />} />
                <Route path="/add" element={<AddRecipe onAdd={fetchRecipes} />} />
                <Route path="/update/:id" element={<UpdateRecipe onUpdate={fetchRecipes} />} />
            </Routes>
        </div>
    );
};

export default Home;