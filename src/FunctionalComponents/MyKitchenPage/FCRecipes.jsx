import React from 'react'
import FCRecipeCard from './FCRecipeCard';

export default function FCRecipes(props) {
    let recipes = props.recipeList.map((recipe,key)=>
        <FCRecipeCard key={key} recipe={recipe}/>
    );
    return (
        <div className="gridDiv">
            {recipes}
        </div>
    )
}
