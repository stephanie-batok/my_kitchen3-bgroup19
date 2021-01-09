import React from 'react';
import FCIngredientCheckBox from './FCIngredientCheckBox';


export default function FCIngredients(props) {

    let ingredientList=props.ingredientList.map((ing,key)=>
        <FCIngredientCheckBox key={key} ingredient={ing} addIngredient={props.addIngredient} removeIngredient={props.removeIngredient}/>
        );

    return (
        <div>
            {ingredientList}
        </div>
    )
}
