import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetail';
import AddRecipe from './components/AddRecipe';
import UpdateRecipe from './components/UpdateRecipe';
import axios from 'axios';
import './App.css';

function App() {
	const [recipes, setRecipes] = useState([]);
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
			await axios.delete(`${API_URL}/recipes/${id}`);
			fetchRecipes();
		} catch (error) {
			console.error('Error deleting recipe:', error);
		}
	};
	return (
		<BrowserRouter>
			<div className="App">
				<NavBar />
				<div className="content">
					<div className="home">
						<Routes>
							<Route path="/" element={<RecipeList recipes={recipes} onDelete={handleDelete} />} />
							<Route path="/recipe/:id" element={<RecipeDetails recipes={recipes} onDelete={handleDelete} />} />
							<Route path="/add" element={<AddRecipe onAdd={fetchRecipes} />} />
							<Route path="/update/:id" element={<UpdateRecipe onUpdate={fetchRecipes} />} />
						</Routes>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
