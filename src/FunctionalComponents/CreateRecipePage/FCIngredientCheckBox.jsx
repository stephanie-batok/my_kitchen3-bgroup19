import React from 'react';
import {Form} from 'react-bootstrap';


export default function FCIngredientCheckBox(props) {

    const handleClick=(event)=>{
        if(event.target.checked){
            props.addIngredient(props.ingredient);
        }
        else{
            props.removeIngredient(props.ingredient);           
        }
    }

    return (
        <Form.Check
        type='checkbox'
        label={props.ingredient.name}
        onChange={handleClick}
        />
    )
}
