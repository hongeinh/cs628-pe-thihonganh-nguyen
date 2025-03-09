const express = require('express');
const router = express.Router();
const Recipe = require("../models/Recipe");

router.get("/", async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) return res.status(400).json({ message: 'Recipe not found' });
        res.json(recipe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/", async (req, res) => {
    if (!req.body?.name) 
        res.status(400).json({ message: 'Name is blank' })
    if (!req.body?.ingredients || req.body.ingredients.length === 0) 
        res.status(400).json({ message: 'Ingredient is blank' })
    if (!req.body?.instructions) 
        res.status(400).json({ message: 'Instruction is blank' })
    const recipe = new Recipe({
            name: req.body.name,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
            prepTime: req.body?.prepTime || '',
            cookTime: req.body?.cookTime || '',
            servings: req.body?.servings || 0,
        });
    try {
        const newRecipe = await recipe.save();
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



router.put("/:id", async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) 
            return res.status(404).json({ message: 'Recipe not found' });
        
        recipe.name = req.body?.name || recipe.name;
        recipe.instructions = req.body?.instructions || recipe.instructions;
        recipe.ingredients = req.body?.ingredients || recipe.ingredients;
        recipe.prepTime = req.body?.prepTime || recipe.prepTime;
        recipe.cookTime = req.body?.cookTime || recipe.cookTime;
        recipe.servings = req.body?.servings || recipe.servings;

        const updatedRecipe = await recipe.save();
        res.json(updatedRecipe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
        await recipe.remove();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


module.exports = router;