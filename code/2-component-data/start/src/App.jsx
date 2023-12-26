import './index.css'
import React from 'react';
// TODO: Import RecipeTitle
import RecipeTitle from './RecipeTitle.jsx';
// TODO: Import IngredientList
import IngredientList from './IngredientList.jsx';
// TODO: Import IngredientList
import StepsRecipe from './StepsRecipe.jsx';

function App() {
    // TODO: Add recipe object
    const recipe = {
        title: 'Mashed potatoes',
        feedback: {
            reting: 4.8,
            reviews: 20
        },
        ingredients: [
            { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
            { name: '4 Tbsp butter', prepared: false },
            { name: '1/8 cup heavy cream', prepared: false },
            { name: 'Salt', prepared: true },
            { name: 'Pepper', prepared: true }
        ],
        steps: [
            { name: 'Add cut potatoes to a pot of heavily salted water.' },
            { name: 'Bring pot to a boil.' },
            { name: 'Boil the potatoes until fork tender, about 10-15 minutes.' },
            { name: 'Drain the potatoes and return to the pot.' },
            { name: 'Add butter, cream, salt, and pepper to taste.' },
            { name: 'Mash the potatoes.' },
            { name: 'Serve immediately or cover to keep warm.' }
        ]
    };

    return (
        <article>
            <h1>Recipe Manager</h1>
            {/* TODO: Add RecipeTitle component */}
            <RecipeTitle title={recipe.title} feedback={recipe.feedback} />
            {/* TODO: Add IngredientList component */}
            <IngredientList ingredients={recipe.ingredients} />
            {/* TODO: Add StepsRecipe component*/}
            <StepsRecipe steps={recipe.steps} />
        </article>
    )
}

export default App;
